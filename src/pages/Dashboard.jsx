import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Paper, Stack } from "@mui/material";
import {
  PeopleAltOutlined as PeopleAltOutlinedIcon,
  AttachMoneyOutlined as AttachMoneyOutlinedIcon,
  TrendingUpOutlined as TrendingUpOutlinedIcon,
  PercentOutlined as PercentOutlinedIcon,
} from "@mui/icons-material";
import MetricCard from "../components/MetricCard";
import ActionCard from "../components/ActionCard";
import RemindersCard from "../components/RemindersCard";
import SummaryItem from "../components/SummaryItem";
import ItemRequestedInfo from "../components/ItemRequestedInfo";
import AddIcon from "@mui/icons-material/Add";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import Alerts from "../Core/Alerts";


// Sample data for the metrics
const metricsData = [
  {
    label: "Total Users",
    value: "12,345",
    icon: PeopleAltOutlinedIcon,
    color: "#4f46e5",
  },
  {
    label: "Revenue",
    value: "$56,789",
    icon: AttachMoneyOutlinedIcon,
    color: "#22c55e",
  },
  {
    label: "Active Sessions",
    value: "1,234",
    icon: TrendingUpOutlinedIcon,
    color: "#eab308",
  },
  {
    label: "Conversion Rate",
    value: "3.45%",
    icon: PercentOutlinedIcon,
    color: "#ec4899",
  },
];

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#7e2e26" }}>
        Dashboard Overview
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: "#6b7280" }}>
        Add more charts, tables, or widgets here to complete your dashboard.
      </Typography>
      {/* Metrics Card*/}
      <Grid container spacing={3}>
        {metricsData.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} mt={2} key={index}>
            <MetricCard isLoading={isLoading} metric={metric} />
          </Grid>
        ))}
      </Grid>
      <Alerts />

      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} spacing={2}>
            <SummaryItem isLoading={isLoading} color="#ACDDDE" />

            <ItemRequestedInfo isLoading={isLoading} color="#ACDDDE" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>
                  <ManageSearchOutlinedIcon color="error" />
                </Typography>
                <Typography>New Items?</Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <ActionCard
                    icon={<PersonAddOutlinedIcon color="primary" />}
                    title="Create new user"
                    subtitle="Make sure you have all information"
                    path="/user/add"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ActionCard
                    icon={<LaptopMacOutlinedIcon color="secondary" />}
                    title="Create new equipment"
                    subtitle="You need to have equipment details"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <ActionCard
                    icon={<AddIcon />}
                    title="Create new user"
                    subtitle="Make sure you have all information"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ActionCard
                    icon={<AddIcon />}
                    title="Create new equipment"
                    subtitle="You need to have equipment details"
                  />
                </Grid>
              </Grid>
            </Paper>

            <RemindersCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
