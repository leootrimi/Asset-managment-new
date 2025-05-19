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
import useEmployerStore from "../../stores/employersStore";
import ApiErrorScreen from "../../Core/ApiErrorScreen";
import EmployersSkeleton from "./Skeleton/EmployersSkeleton";

const Employers = () => {

  const { employers, loading, error, fetchEmployers } = useEmployerStore();
  
  useEffect(() => {
    fetchEmployers();
  }, []);

  if (loading) {
    return <EmployersSkeleton />
  }

  if (error) {
    return <ApiErrorScreen />
  }

  return (
    <Box sx={{ width: "100%", p: 0 }}>
      {/* Header with filtering */}
      <EmployersFilterSection />


      {/* Main content layout */}
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <EmployerListItem
              employtersList={employers}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Employers;
