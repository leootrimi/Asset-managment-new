import React, { useState } from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import EmployersProfileView from "../components/EmployersProfileView";
import EmployerListItem from "../components/EmployerListItem";

const Employers = () => {
  const mockData = [
    {
      id: 1,
      name: "John Doe",
      role: "iOS Engineer",
      employeeId: "#153423",
      address: "8 rue Lavoisier 75008 Paris",
      profilePicture: "JD",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Android Developer",
      employeeId: "#153424",
      address: "12 rue Newton 75015 Paris",
      profilePicture: "JS",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Backend Engineer",
      employeeId: "#153425",
      address: "22 rue Victor 75010 Paris",
      profilePicture: "MB",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Box sx={{ width: "100%", p: 4 }}>
      {/* Header with filtering */}
      <Paper sx={{ width: "100%", p: 2, mb: 2 }}>Filter Section</Paper>

      {/* Main content layout */}
      <Grid container spacing={2}>
        {/* Left section (User list) */}
        <Grid item xs={selectedUser ? 3 : 12}>
          <Stack spacing={1}>
            {mockData.map((employer) => (
              <EmployerListItem
                key={employer.id}
                selectedUser={selectedUser}
                onSelectUser={setSelectedUser}
                user={employer}
              />
            ))}
          </Stack>
        </Grid>

        {/* Right section (Profile) */}
        {selectedUser && (
          <Grid item xs={9}>
            <EmployersProfileView selectedUser={selectedUser} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Employers;
