import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
    <Box sx={{ width: "100%", p: 4 }}>
      {/* Header with filtering */}
      <Paper sx={{ width: "100%", p: 2, mb: 2, backgroundColor: "#205781" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            InputLabelProps={{ style: { color: "white" } }} // Label color
            InputProps={{
              style: { color: "white", borderColor: "white" }, // Text color
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" }, // Border color
                "&:hover fieldset": { borderColor: "#ddd" }, // Hover effect
                "&.Mui-focused fieldset": { borderColor: "white" }, // Focus color
              },
            }}
          />
          <FormControl
            fullWidth
            sx={{ "& .MuiOutlinedInput-root": { color: "white" } }}
          >
            <Select
              labelId="position-select-label"
              value={position}
              onChange={(event) => setPosition(event.target.value)}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ddd",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            >
              <MenuItem value="iOS">iOS Engineer</MenuItem>
              <MenuItem value="Frontend">Frontend</MenuItem>
              <MenuItem value="Backend">Backend</MenuItem>
              <MenuItem value="Devops">DevOps</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              padding: "1rem",
              px: "2.5rem",
              borderRadius: "2rem",
              borderColor: 'white',
              "&:hover": { backgroundColor: "white", color: "#205781" },
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
