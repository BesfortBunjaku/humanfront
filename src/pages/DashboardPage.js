import React from "react";
import Layout from "../layout/Layout";
import { Container, Grid} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { useEffect } from "react";
import CountCard from "../components/CountCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "First and Last names Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "First Names",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(23, 35, 47, 0.5)",
    },
    {
      label: "Last Names",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function DashboardPage(props) {
  const [statistics, setStatistics] = React.useState({});

  const GetStatistics = async () => {
    const response = await fetch("http://localhost:8000/api/statistics", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setStatistics(data);
  };
  useEffect(() => {
    GetStatistics();
  }, []);

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CountCard
                title="First Name"
                number={statistics.total_first_name}
                description="Total amount"
                unit="mil"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CountCard
                title="Last Name"
                number={statistics.total_last_name}
                description="Total amount"
                unit="mil"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CountCard
                title="Files Uploaded"
                number={statistics.total_files}
                description="Total amount"
                unit="files"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Bar options={options} data={data} />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}

export default DashboardPage;
