import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "../src/theme";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import FilesPage from "./pages/FilesPage/FilesPage";
import FirstNamePage from "./pages/FirstNamePage/FirstNamePage";
import LastNamePage from "./pages/LastNamePage/LastNamePage";
import SearchPage from "./pages/SearchPage/SearchPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/firstnames" element={<FirstNamePage />} />
            <Route path="/lastnames" element={<LastNamePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
