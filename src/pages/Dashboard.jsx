// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Box, Skeleton } from '@mui/material';
import { 
  PeopleAltOutlined as PeopleAltOutlinedIcon, 
  AttachMoneyOutlined as AttachMoneyOutlinedIcon, 
  TrendingUpOutlined as TrendingUpOutlinedIcon, 
  PercentOutlined as PercentOutlinedIcon 
} from '@mui/icons-material';

// Sample data for the metrics
const metricsData = [
  { label: 'Total Users', value: '12,345', icon: PeopleAltOutlinedIcon, color: '#4f46e5' },
  { label: 'Revenue', value: '$56,789', icon: AttachMoneyOutlinedIcon, color: '#22c55e' },
  { label: 'Active Sessions', value: '1,234', icon: TrendingUpOutlinedIcon, color: '#eab308' },
  { label: 'Conversion Rate', value: '3.45%', icon: PercentOutlinedIcon, color: '#ec4899' },
];

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds of loading
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Box sx={{ p: 4, bgcolor: '#f3f4f6', minHeight: '100vh' }}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1f2937' }}>
          Dashboard Overview
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: '#6b7280' }}>
          Add more charts, tables, or widgets here to complete your dashboard.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {metricsData.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} mt={2} key={index}>
            {isLoading ? (
              <Card
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 2,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Skeleton variant="circular" width={40} height={40} />
                  <Box>
                    <Skeleton variant="text" width={60} height={30} />
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </CardContent>
              </Card>
            ) : (
              // Actual metric box when loaded
              <Card
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 2,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {/* Icon with dynamic color */}
                  <Box
                    sx={{
                      p: 1,
                      bgcolor: `${metric.color}20`, // 20% opacity of the color
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <metric.icon sx={{ fontSize: 32, color: metric.color }} />
                  </Box>
                  {/* Metric Info */}
                  <Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1f2937' }}>
                      {metric.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {metric.label}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;