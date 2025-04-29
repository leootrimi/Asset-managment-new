import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  Button
} from "@mui/material";
import EmployerListItem from "./Components/EmployerListItem";
import EmployersFilterSection from "./Components/EmployersFilterSection";
import { apiRequest } from "../../services/ApiCalls";

const Employers = () => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    const fetchData = async () => {
      const data = await apiRequest({endpoint: '/users', token: token});
      console.log(data);
      setUsers(data)
    }
    if (token) {
      fetchData()
    }

  }, []);

  return (
    <Box sx={{ width: "100%", p: 0 }}>
      {/* Header with filtering */}
      <EmployersFilterSection />


      {/* Main content layout */}
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <EmployerListItem
              employtersList={users}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Employers;
