// src/components/MetricCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';

const MetricCard = ({ isLoading, metric }) => {
  return (
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
        {isLoading ? (
          <>
            <Skeleton variant="circular" width={40} height={40} />
            <Box>
              <Skeleton variant="text" width={60} height={30} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                p: 1,
                bgcolor: `${metric.color}20`,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <metric.icon sx={{ fontSize: 32, color: metric.color }} />
            </Box>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1f2937' }}>
                {metric.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {metric.label}
              </Typography>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;