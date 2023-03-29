import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Box from "@mui/material/Box";
import AddLinkIcon from "@mui/icons-material/AddLink";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FirstNameFromFile from "./components/FirstNameFromFile";
import FirstNameFromLink from "./components/FirstNameFromLink";

function FirstNamePage() {
  const [tab, setTab] = useState("1");

  const changeTab = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={tab}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={changeTab} aria-label="lab API tabs example">
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
                <FirstNameFromLink />
              </TabPanel>
              <TabPanel value="2">
                <FirstNameFromFile />
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}

export default FirstNamePage;
