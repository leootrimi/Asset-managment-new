import React from "react";
import { Paper, Stack, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ActionCard = ({ icon, title, subtitle, path }) => (
  <Paper elevation={0} sx={{ p: 2, height: "100%", borderRadius: 3 }}>
    <Link to={path}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton size="small">{icon}</IconButton>
        <Stack direction="column">
          <Typography variant="body1">{title}</Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            {subtitle}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  </Paper>
);

export default ActionCard;
