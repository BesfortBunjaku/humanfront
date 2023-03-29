import { useQuery, useMutation, useQueryClient } from "react-query";
import { getFiles, deleteFile } from "../../api/FileApi";
import React from "react";
import Layout from "../../layout/Layout";
import { Container, Grid, Divider, Chip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import FileListItem from "../../components/FileListItem";
import Fade from "@mui/material/Fade";
import Error from "../../components/Error";

function FilesPage() {
  const queryClient = useQueryClient();
  const { data, error, isError } = useQuery("files", getFiles, {
    refetchOnWindowFocus: true,
    select: (data) => data.file_history,
    retry: 0,
  });

  const deleteFileMutation = useMutation(deleteFile, {
    onSuccess: () => {
      queryClient.invalidateQueries("files");
    },
  });

  if (isError) {
    return <Error message={error.message} />;
  }

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
              {data?.map((file) => (
                <Fade key={file.id} in={true} timeout={1000}>
                  <Grid item xs={12} sm={10}>
                    <FileListItem
                      fileId={file.id}
                      fileType={file.file_extension}
                      fileName={file.file_name}
                      fileSize={file.file_size}
                      fileDate={file.created_at}
                      fileLink={file.uploaded_file.file_path}
                      onDeleteClick={(id) => deleteFileMutation.mutate(id)}
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
