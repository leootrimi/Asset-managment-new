import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const EmployerListItem = ({ selectedUser, onSelectUser, user }) => {
  const isSelected = selectedUser?.id === user.id; // Check if the current item is selected

  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 1.5,
          height: "100%",
          border: isSelected ? "2px solid #205781" : "none", 
          borderRadius: isSelected ? "8px" : "3px", 
          transition: "all 0.1s ease",
        }}
        onClick={() => onSelectUser(user)}
      >
        <Stack direction="row" spacing={1} fontSize={12} alignItems="baseline">
          <Typography
            style={{
              backgroundColor: "rgba(32, 87, 129, 0.6)",
              borderRadius: "50%",
              width: "2.5em",
              height: "2.5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {user.profilePicture}
          </Typography>
          <Stack spacing={0.5}>
            <Stack direction="row" spacing={1}>
              <Box sx={{ cursor: "pointer" }}>{user.name}</Box>
              <Typography
                style={{
                  backgroundColor: "rgba(235, 235, 235, 0.6)",
                  padding: "0.2em 0.4em",
                }}
                borderRadius={2}
                fontSize={12}
              >
                {user.role}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                style={{
                  backgroundColor: "rgba(32, 87, 129, 0.6)",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography fontSize={12}>#{user.id}</Typography>
              <Typography color="gray" fontSize={12}>{user.address}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default EmployerListItem;
