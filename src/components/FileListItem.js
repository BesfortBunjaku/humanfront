import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Divider,
  Box,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "@mui/material";

function FileListItem({
  fileId,
  fileType,
  fileName,
  fileSize,
  fileDate,
  fileLink,
  onDeleteClick,
}) {
  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  return (
    <List dense={true}>
      <ListItem
        secondaryAction={
          <Grid container spacing={2}>
            <Grid item>
              <IconButton
                sx={{ color: "#17232F" }}
                edge="end"
                aria-label="delete"
                component={Link}
                href={`http://localhost:8008${fileLink}`}
              >
                <DownloadIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "#17232F" }}
                edge="end"
                aria-label="delete"
                onClick={() => onDeleteClick(fileId)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        }
      >
        <ListItemIcon>
          {(() => {
            if (fileType === "pdf") {
              return (
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                    mx: "auto",
                  }}
                  alt="The house from the offer."
                  src={require("../assets/images/pdf70.png")}
                />
              );
            } else if (fileType === "xlsx") {
              return (
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                  }}
                  alt="The house from the offer."
                  src={require("../assets/images/xlsx70.png")}
                />
              );
            } else if (fileType === "csv") {
              return (
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                  }}
                  alt="The house from the offer."
                  src={require("../assets/images/csv70.png")}
                />
              );
            }

            return null;
          })()}
        </ListItemIcon>
        <ListItemText
          primary={fileName}
          secondary={
            formatBytes(fileSize) +
            "  --  " +
            new Date(fileDate).toLocaleString()
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default FileListItem;
