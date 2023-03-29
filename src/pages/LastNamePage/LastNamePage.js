import React, { useState } from "react";
import Layout from "../../layout/Layout";
import {
  Container,
  Grid,
  Typography,
  Divider,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { DropzoneAreaBase } from "mui-file-dropzone";
import Avatar from "@mui/joy/Avatar";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/material/Box";
import AddLinkIcon from "@mui/icons-material/AddLink";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

function LastNamePage(props) {
  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fnflFields, setFnflFields] = useState({});
  const [fnffFields, setFnffFields] = useState({});
  const [files, setFiles] = useState([]);

  const InsertFirstNameFromLink = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/firstname/fromlink",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(fnflFields),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const InsertFirstNameFromFile = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/firstname/fromlink",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(fnflFields),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const handleFnflFieldChange = (e) => {
    setFnflFields({ ...fnflFields, [e.target.name]: e.target.value });
  };

  const handleFnffFieldChange = (e) => {
    setFnffFields({ ...fnffFields, [e.target.name]: e.target.value });
  };

  const handleFnflButtonClick = async () => {
    // if (!loading) {
    //   setSuccess(false);
    //   setLoading(true);
    // }
    InsertFirstNameFromLink();
  };

  const handleFnffButtonClick = async () => {
    // if (!loading) {
    //   setSuccess(false);
    //   setLoading(true);
    // }
    InsertFirstNameFromFile();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddFiles = (newFiles) => {
    // newFiles = newFiles.filter(
    //   (file) => !files.find((f) => f.data === file.data)
    // );
    // var fileObj = newFiles[0];
    // fileObj.images = {
    //   image_base_64: newFiles[0].data.split(",")[1],
    //   category: "online",
    //   image_name: newFiles[0].file.name.split(".")[0],
    //   image_type: newFiles[0].file.type.split("/")[1],
    //   image_sort: files.length + 1,
    // };

    setFiles(newFiles);
  };

  const handleDeleteFiles = (deleted) => {
    setFiles(files.filter((f) => f !== deleted));
    // files.forEach((file, index) => {
    //   file.images.image_sort = files.length - 1;
    // });
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    icon={<AddLinkIcon />}
                    iconPosition="start"
                    label="From Link"
                    value="1"
                  />
                  <Tab
                    icon={<AttachFileIcon />}
                    iconPosition="start"
                    label="From File"
                    value="2"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <Divider>
                      <Chip label="Upload Last Names From Url" />
                    </Divider>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <CssVarsProvider>
                      <RadioGroup
                        aria-label="platform"
                        defaultValue="Website"
                        overlay
                        name="platform"
                        sx={{
                          flexDirection: "row",
                          gap: 2,
                          [`& .${radioClasses.checked}`]: {
                            [`& .${radioClasses.action}`]: {
                              inset: -1,
                              border: "3px solid",
                              borderColor: "primary.200",
                            },
                          },
                          [`& .${radioClasses.radio}`]: {
                            display: "contents",
                            "& > svg": {
                              zIndex: 2,
                              position: "absolute",
                              top: "-8px",
                              right: "-8px",
                              bgcolor: "background.body",
                              borderRadius: "50%",
                            },
                          },
                        }}
                      >
                        {["csv", "tsv", "xlsx", "xls", "json"].map((value) => (
                          <Sheet
                            key={value}
                            variant="outlined"
                            sx={{
                              borderRadius: "md",
                              bgcolor: "background.level1",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 1.5,
                              p: 2,
                              minWidth: 120,
                            }}
                          >
                            <Radio
                              id={value}
                              value={value}
                              name="fnfl_file_extension"
                              checkedIcon={<CheckCircleRoundedIcon />}
                              onChange={handleFnflFieldChange}
                            />
                            <Avatar variant="soft" size="lg" />
                            <FormLabel htmlFor={value}>{value}</FormLabel>
                          </Sheet>
                        ))}
                      </RadioGroup>
                    </CssVarsProvider>
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField
                      size="small"
                      required
                      fullWidth
                      label="Column Name"
                      name="fnfl_column_name"
                      onChange={handleFnflFieldChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField
                      size="small"
                      disabled={
                        fnflFields["fnfl_file_extension"] === "xlsx"
                          ? false
                          : fnflFields["fnfl_file_extension"] === "xls"
                          ? false
                          : true
                      }
                      required
                      fullWidth
                      label="Sheet Name"
                      name="fnfl_sheet_name"
                      onChange={handleFnflFieldChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8} md={8} lg={8}>
                    <TextField
                      size="small"
                      required
                      fullWidth
                      label="File Link"
                      name="fnfl_file_link"
                      sx={{ input: { color: "#007FFF" } }}
                      onChange={handleFnflFieldChange}
                    />
                  </Grid>

                  <Grid item xs={5} sm={5} md={5} lg={5}></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Box sx={{ position: "relative" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#17232F" }}
                        disabled={loading}
                        onClick={handleFnflButtonClick}
                      >
                        Upload
                      </Button>
                      {loading && (
                        <CircularProgress
                          size={24}
                          sx={{
                            color: green[500],
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: "-12px",
                            marginLeft: "-12px",
                          }}
                        />
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <Divider>
                      <Chip label="Upload Last Names From File" />
                    </Divider>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <CssVarsProvider>
                      <RadioGroup
                        aria-label="platform"
                        defaultValue="Website"
                        overlay
                        name="platform"
                        sx={{
                          flexDirection: "row",
                          gap: 2,
                          [`& .${radioClasses.checked}`]: {
                            [`& .${radioClasses.action}`]: {
                              inset: -1,
                              border: "3px solid",
                              borderColor: "primary.200",
                            },
                          },
                          [`& .${radioClasses.radio}`]: {
                            display: "contents",
                            "& > svg": {
                              zIndex: 2,
                              position: "absolute",
                              top: "-8px",
                              right: "-8px",
                              bgcolor: "background.body",
                              borderRadius: "50%",
                            },
                          },
                        }}
                      >
                        {[".csv", ".tsv", ".xlsx", ".xls", ".json"].map(
                          (value) => (
                            <Sheet
                              key={value}
                              variant="outlined"
                              sx={{
                                borderRadius: "md",
                                bgcolor: "background.level1",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 1.5,
                                p: 2,
                                minWidth: 120,
                              }}
                            >
                              <Radio
                                id={value}
                                value={value}
                                name="fnff_file_extension"
                                checkedIcon={<CheckCircleRoundedIcon />}
                                onChange={handleFnffFieldChange}
                              />
                              <Avatar variant="soft" size="lg" />
                              <FormLabel htmlFor={value}>{value}</FormLabel>
                            </Sheet>
                          )
                        )}
                      </RadioGroup>
                    </CssVarsProvider>
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField
                      size="small"
                      required
                      fullWidth
                      label="Column Name"
                      name="fnff_column_name"
                      onChange={handleFnffFieldChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField
                      size="small"
                      disabled={
                        fnffFields["fnff_file_extension"] === "xlsx"
                          ? false
                          : fnffFields["fnff_file_extension"] === "xls"
                          ? false
                          : true
                      }
                      required
                      fullWidth
                      label="Sheet Name"
                      name="fnff_sheet_name"
                      onChange={handleFnffFieldChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <DropzoneAreaBase
                      filesLimit={1}
                      acceptedFiles={[".csv", ".tsv", ".xlsx", ".xls", ".json"]}
                      showFileNames={true}
                      maxFileSize={50000000}
                      name="Files"
                      
                      fileObjects={files}
                      onAdd={handleAddFiles}
                      onDelete={handleDeleteFiles}
                    />
                    <Typography variant="caption" display="block" gutterBottom>
                      Upload - max. 1 file
                    </Typography>
                  </Grid>

                  <Grid item xs={5} sm={5} md={5} lg={5}></Grid>
                  <Grid
                    style={{ paddingTop: "10px" }}
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#17232F" }}
                        disabled={loading}
                        onClick={handleFnffButtonClick}
                      >
                        Save
                      </Button>
                      {loading && (
                        <CircularProgress
                          size={24}
                          sx={{
                            color: green[500],
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: "-12px",
                            marginLeft: "-12px",
                          }}
                        />
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}

export default LastNamePage;
