import React from "react";
import Layout from "../layout/Layout";
import { Container, Grid, Divider, Chip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { useEffect } from "react";
import FileListItem from "../components/FileListItem";
import Fade from "@mui/material/Fade";

function FilesPage() {
  const [files, setFiles] = React.useState([]);

  const GetFiles = async () => {
    const response = await fetch("http://localhost:8000/api/statistics", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setFiles(data["file_history"]);
  };
  useEffect(() => {
    GetFiles();
  }, []);

  const DeleteFile = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/upload/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      GetFiles();
    }
  };

  const onDeleteClick = (id) => {
    DeleteFile(id);
  };


  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Divider>
                <Chip label="Uploaded Files" />
              </Divider>
            </Grid>

            <Grid container item justifyContent="center">
              {files.map((file) => (
                <Fade in={true} timeout={1000}>
                  <Grid key={file.id} item xs={12} sm={10}>
                    <FileListItem
                      fileid={file.id}
                      filetype={file.file_extension}
                      filename={file.file_name}
                      filesize={file.file_size}
                      filedate={file.created_at}
                      filelink={file.uploaded_file.file_path}
                      onDeleteClick={onDeleteClick}
                 
                    />
                  </Grid>
                </Fade>
              ))}
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}

export default FilesPage;
