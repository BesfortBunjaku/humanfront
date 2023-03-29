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

function FirstNameFromLink(props) {
  const queryClient = useQueryClient();
  const [fields, setFields] = useState({});

  const createFileMutation = useMutation(createFile, {});

  const changeField = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const Submit = async () => {
    createFileMutation.mutate(fields);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12}>
        <Divider>
          <Chip label="Upload First Names From Url" />
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
                  backgroundColor: "primary.200",
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
      <Grid item xs={12} sm={8} md={8} lg={8}>
        <TextField
          size="small"
          required
          fullWidth
          label="File Link"
          name="file_link"
          sx={{ input: { color: "#007FFF" } }}
          onChange={changeField}
        />
      </Grid>

      <Grid item xs={5} sm={5} md={5} lg={5}></Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <Box sx={{ position: "relative" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#17232F" }}
            // disabled={loading}
            onClick={Submit}
          >
            Upload
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

export default FirstNameFromLink;
