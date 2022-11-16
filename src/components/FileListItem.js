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

function FileListItem(props) {
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
                href={`http://127.0.0.1:8000${props.filelink}`}
              >
                <DownloadIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "#17232F" }}
                edge="end"
                aria-label="delete"
                onClick={() => props.onDeleteClick(props.fileid)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        }
      >
        <ListItemIcon>
          {(() => {
            if (props.filetype === "pdf") {
              return (
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                    mx: "auto",
                  }}
                  alt="The house from the offer."
                  src={require("../images/pdf70.png")}
                />
              );
            } else if (props.filetype === "xlsx") {
              return (
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                  }}
                  alt="The house from the offer."
                  src={require("../images/xlsx70.png")}
                />
              );
            } else if (props.filetype === "csv") {
              return (
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                  }}
                  alt="The house from the offer."
                  src={require("../images/csv70.png")}
                />
              );
            }

            return null;
          })()}
        </ListItemIcon>
        <ListItemText
          primary={props.filename}
          secondary={
            formatBytes(props.filesize) +
            "  --  " +
            new Date(props.filedate).toLocaleString()
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default FileListItem;
