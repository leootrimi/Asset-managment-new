import React from "react";
import { Typography, Paper, Stack, Skeleton } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

const metricsData = [
    { label: "Total Users", value: "12,345", icon: PeopleAltOutlinedIcon, color: "#F5EDED" },
    { label: "Revenue", value: "$56,789", icon: AttachMoneyOutlinedIcon, color: "#E2DAD6" },
    { label: "Conversion Rate", value: "3.45%", icon: PercentOutlinedIcon, color: "#6482AD" },
    { label: "Active Sessions", value: "1,234", icon: TrendingUpOutlinedIcon, color: "#7FA1C3" },
  ];

const SummaryItem = ({isLoading}) => {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
        { isLoading ? (
            <>
            <Skeleton variant="rectangular" width={60} height={27} sx={{ borderRadius: 2, mb: 2 }} />
            <Stack spacing={2}>
                {/* Render 4 skeleton rectangles */}
                {[...Array(4)].map((_, index) => (
                    <Skeleton key={index} variant="rectangular" height={27} sx={{ borderRadius: 2 }} />
                ))}
                </Stack>
            </>
        ) : (
            <>
        <Typography gutterBottom>Summary</Typography>
                {metricsData.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                    <Typography
                        key={index}
                        sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: item.color,
                        borderRadius: 5,
                        color: "#fff",
                        alignItems: "center",
                        mt: 1
                        }}
                    >
                        <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
                        <IconComponent />
                        {item.label}
                        </Stack>
                        {item.value}
                    </Typography>
                    );
                })}
            </>
        )
        }
    </Paper>
  );
};

export default SummaryItem;
