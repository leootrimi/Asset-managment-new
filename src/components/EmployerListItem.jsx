import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const EmployerListItem = ({ selectedUser, onSelectUser }) => {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 1.5,
          height: "100%",
          border: selectedUser ? "2px solid #205781" : "none"
        }}
      >
        <Stack direction="row" spacing={1} fontSize={12} alignItems='baseline'>
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
            JD
          </Typography>
          <Stack spacing={0.5}>
            <Stack direction="row" spacing={1}>
              <Box onClick={() => onSelectUser({ name: "John Doe" })} sx={{ cursor: "pointer" }}>
                John Doe
              </Box>
              <Typography
                style={{
                  backgroundColor: "rgba(235, 235, 235, 0.6)",
                  padding: "0.2em 0.4em",
                }}
                borderRadius={2}
                fontSize={12}
              >
                iOS Engineer
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
              <Typography fontSize={12}>#153423</Typography>
              <Typography color="gray" fontSize={12}>8 rue Lavoisier 75008 Paris</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default EmployerListItem;
