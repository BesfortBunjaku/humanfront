import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import DashboardPage from "./pages/DashboardPage";
import FilesPage from "./pages/FilesPage";
import FirstNamePage from "./pages/FirstNamePage";
import LastNamePage from "./pages/LastNamePage";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
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
  );
}

export default App;
