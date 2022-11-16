import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

export default function BottomNav() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Dashboard"
          value=""
          icon={<DashboardIcon />}
        />
        <BottomNavigationAction
          label="First Name"
          value="firstnames"
          icon={<ContactPageIcon />}
        />
        <BottomNavigationAction
          label="Last Name"
          value="lastnames"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Files"
          value="files"
          icon={<FolderIcon />}
        />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<PersonSearchIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
