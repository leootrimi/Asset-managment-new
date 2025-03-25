import React from "react";
import { Typography, Paper, Stack, Skeleton, Box } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const metricsData = [
  { label: "Total Interaction", value: "12,045", percentage: "64%", icon: PeopleAltOutlinedIcon, color: "#4f1d17" },
  { label: "Revenue", value: "$56,789", percentage: "12%", icon: AttachMoneyOutlinedIcon, color: "#6e2921" },
  { label: "Active Sessions", value: "1,234", percentage: "28%", icon: TrendingUpOutlinedIcon, color: "#7e2e26" }
];

const ItemRequestedInfo = ({ isLoading }) => {
  return (
    <Stack direction="row" spacing={2} mt={2} justifyContent="space-between">
      {metricsData.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Paper key={index} elevation={3} sx={{ p: 2, borderRadius: 3, flex: 1 }}>
            {isLoading ? (
              <Stack spacing={2}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width="100%" height={20} sx={{ borderRadius: 2 }} />
                <Skeleton variant="rectangular" width="100%" height={30} sx={{ borderRadius: 2 }} />
                <Stack direction='row' spacing={2}>
                 <Skeleton variant="rectangular" width={40} height={20} sx={{ borderRadius: 2 }} />
                 <Skeleton variant="rectangular" width={70} height={20} sx={{ borderRadius: 2 }} />
                </Stack>
              </Stack>
            ) : (
              <Stack spacing={1}>
                {/* Icon with Background */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: item.color,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <IconComponent sx={{ color: "#fff" }} />
                </Box>

                {/* Title */}
                <Typography variant="body2" color="textSecondary">
                  {item.label}
                </Typography>

                {/* Main Value */}
                <Typography variant="h5" fontWeight="bold">
                  {item.value}
                </Typography>

                {/* Percentage Change */}
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <ArrowUpwardIcon sx={{ fontSize: 16, color: "green" }} />
                  <Typography variant="body2" color="green">
                    {item.percentage}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    to last month
                  </Typography>
                </Stack>

                {/* Info Icon */}
                <InfoOutlinedIcon sx={{ fontSize: 16, color: "gray", alignSelf: "flex-end" }} />
              </Stack>
            )}
          </Paper>
        );
      })}
    </Stack>
  );
};

export default ItemRequestedInfo;
