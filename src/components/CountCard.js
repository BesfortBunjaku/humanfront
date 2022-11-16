import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CountUp from "react-countup";

export default function CountCard(props) {
  return (
    <Card variant="outlined" sx={{ backgroundColor: "#17232F" }}>
      <CardContent>
        <Typography
          variant="h4"
          sx={{ fontSize: 16, color: "#939FAB", fontWeight: 600 }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{ color: "#D0D3D8", fontWeight: 600 }}
          variant="h2"
          component="div"
        >
          <CountUp end={props.number} />{" "}
          <Typography
            sx={{ color: "#7C8797", fontWeight: 600 }}
            variant="h4"
            component="span"
          >
            {props.unit}
          </Typography>
        </Typography>
        <Typography sx={{ color: "#939FAB", mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
