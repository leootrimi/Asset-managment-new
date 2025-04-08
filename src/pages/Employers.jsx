import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  Button
} from "@mui/material";
import EmployersProfileView from "../components/EmployersProfileView";
import EmployerListItem from "../components/EmployerListItem";
import { motion } from "framer-motion";

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
  const [position, setPosition] = useState(null);

  return (
    <Box sx={{ width: "100%", p: 0 }}>
      {/* Header with filtering */}
      <Paper sx={{ width: "100%", p: 2, mb: 2, backgroundColor: "#5e231c" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#205781] focus:border-[#205781]
"
              placeholder="Search Employers..."
              required
            />
          </div>
          
          {/* Position Selection */}
          <div className="w-full md:w-1/3">
            <select
              id="positions"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
              value={position}
              onChange={(event) => setPosition(event.target.value)}
            >
              <option value="">Choose a position</option>
              <option value="iOS">iOS Engineer</option>
              <option value="Frontend">Frontend Developer</option>
              <option value="Backend">Backend Engineer</option>
              <option value="Devops">DevOps Engineer</option>
            </select>
          </div>
          
          {/* Search Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white", color: "#205781",
              padding: "0.8rem", px: "2.5rem", borderRadius: "2rem",
              "&:hover": { backgroundColor: "#ddd" },
            }}
          >
            Search
          </Button>
        </Stack>
      </Paper>

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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <EmployersProfileView
                selectedUser={selectedUser}
                onSelectUser={setSelectedUser}
              />
            </motion.div>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Employers;
