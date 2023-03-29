import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Layout from "../../../layout/Layout";
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
import theme from "../../../theme";
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
import { createFile } from "../../../api/FirstNameApi";

function FirstNameFromFile(props) {
  const queryClient = useQueryClient();
  const [fields, setFields] = useState({});
  const [files, setFiles] = useState([]);

  const createFileMutation = useMutation(createFile, {
    onError: (error) => {
      console.log("error", error.response.data);
    },
  });

  const changeField = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const Submit = async () => {
    createFileMutation.mutate(fields);
  };

  const addFiles = (newFiles) => {
    setFields({ ...fields, "file_path": newFiles[0].file });
    setFiles(newFiles);
  };

  const deleteFiles = (deleted) => {
    setFiles(files.filter((f) => f !== deleted));
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12}>
        <Divider>
          <Chip label="Upload First Names From File" />
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
            {[".csv", ".tsv", ".xlsx", ".xls", ".json"].map((value) => (
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
                  name="file_extension"
                  checkedIcon={<CheckCircleRoundedIcon />}
                  onChange={changeField}
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
          name="column_name"
          onChange={changeField}
        />
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2}>
        <TextField
          size="small"
          disabled={
            fields["file_extension"] === "xlsx"
              ? false
              : fields["file_extension"] === "xls"
              ? false
              : true
          }
          required
          fullWidth
          label="Sheet Name"
          name="sheet_name"
          onChange={changeField}
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
          onAdd={addFiles}
          onDelete={deleteFiles}
        />
        <Typography variant="caption" display="block" gutterBottom>
          Upload - max. 1 file
        </Typography>
      </Grid>

      <Grid item xs={5} sm={5} md={5} lg={5}></Grid>
      <Grid style={{ paddingTop: "10px" }} item xs={2} sm={2} md={2} lg={2}>
        <Box sx={{ position: "relative" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#17232F" }}
            // disabled={loading}
            onClick={Submit}
          >
            Save
          </Button>
          {/* {loading && (
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
            )} */}
        </Box>
      </Grid>
    </Grid>
  );
}

export default FirstNameFromFile;
