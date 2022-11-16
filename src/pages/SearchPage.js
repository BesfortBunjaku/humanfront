import React from "react";
import Layout from "../layout/Layout";
import {
  Container,
  Grid,
  Divider,
  Chip,
  Paper,
  Typography,
  TableContainer,
  LinearProgress,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { DataGrid } from "@mui/x-data-grid";

const FirstNameHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    padding: "0px",
  },
  {
    field: "first_name",
    headerName: "First Name",
    width: 350,
  },
];

const LastNameHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    padding: "0px",
  },

  {
    field: "last_name",
    headerName: "Last Name",
    width: 350,
  },
];

function SearchPage(props) {
 
  const [firstNameRows, setFirstNameRows] = React.useState([]);
  const [lastNameRows, setLastNameRows] = React.useState([]);

 
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={12}>
              <Divider>
                <Chip label="Suche" />
              </Divider>
            </Grid>

            <Grid mb={1} item xs={12} sm={6}>
              <Paper
                variant="outlined"
                sx={{ backgroundColor: "#f8f9fa", paddingTop: "15px" }}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sm={4}></Grid>
                  <Grid item sm={4}>
                    <Typography
                      sx={{ color: "#344767" }}
                      component="h1"
                      variant="h5"
                    >
                      First Name
                    </Typography>
                  </Grid>
                  <Grid item sm={4}></Grid>

                  <TableContainer
                    elevation={0}
                    sx={{ marginTop: "20px", height: 600, width: "100%" }}
                    component={Paper}
                  >
                    <DataGrid
                      sx={{
                        ".MuiDataGrid-columnHeaderTitleContainer ": {
                          justifyContent: "center",
                        },
                        ".MuiDataGrid-columnHeaderTitle": {
                          fontWeight: "600",
                          color: "#344767",
                        },
                        "&.MuiDataGrid-root": {
                          border: "none",
                        },
                      }}
                      components={{
                        LoadingOverlay: LinearProgress,
                      }}
                      loading={firstNameRows ? false : true}
                      rows={firstNameRows ? firstNameRows : []}
                      columns={FirstNameHeader}
                      pageSize={100}
                      rowsPerPageOptions={[10, 20, 50, 100]}
                      checkboxSelection
                      disableSelectionOnClick
                      getRowId={(row) => row.id}
                      density="compact"
                      showCellRightBorder
                      showRowHeader
                    />
                  </TableContainer>
                </Grid>
              </Paper>
            </Grid>
            <Grid mb={1} item xs={12} sm={6}>
              <Paper
                variant="outlined"
                sx={{ backgroundColor: "#f8f9fa", paddingTop: "15px" }}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sm={4}></Grid>
                  <Grid item sm={4}>
                    <Typography
                      sx={{ color: "#344767" }}
                      component="h1"
                      variant="h5"
                    >
                      Last Name
                    </Typography>
                  </Grid>
                  <Grid item sm={4}></Grid>

                  <TableContainer
                    elevation={0}
                    sx={{ marginTop: "20px", height: 600, width: "100%" }}
                    component={Paper}
                  >
                    <DataGrid
                      sx={{
                        ".MuiDataGrid-columnHeaderTitleContainer ": {
                          justifyContent: "center",
                        },
                        ".MuiDataGrid-columnHeaderTitle": {
                          fontWeight: "600",
                          color: "#344767",
                        },
                        "&.MuiDataGrid-root": {
                          border: "none",
                        },
                      }}
                      components={{
                        LoadingOverlay: LinearProgress,
                      }}
                      loading={lastNameRows ? false : true}
                      rows={lastNameRows ? lastNameRows : []}
                      columns={LastNameHeader}
                      pageSize={100}
                      rowsPerPageOptions={[10, 20, 50, 100]}
                      checkboxSelection
                      disableSelectionOnClick
                      getRowId={(row) => row.id}
                      density="compact"
                      showCellRightBorder
                      showRowHeader
                    />
                  </TableContainer>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}

export default SearchPage;
