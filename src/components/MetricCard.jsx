// src/components/MetricCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';

const MetricCard = ({ isLoading, metric }) => {
  return (
    <Card
      sx={{
        bgcolor: '#4f1d17', // ose #111827
        borderRadius: 2,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        },
      }}
      className='bg-gray-900'
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        {isLoading ? (
          <>
            <Skeleton variant="circular" width={40} height={40} sx={{ bgcolor: '#7e2e26' }} />
            <Box>
              <Skeleton variant="text" width={60} height={30} sx={{ bgcolor: '#7e2e26' }}  />
              <Skeleton variant="text" width={80} height={20} sx={{ bgcolor: '#7e2e26' }}  />
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                p: 1,
                bgcolor: `${metric.color}30`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <metric.icon sx={{ fontSize: 32, color: metric.color }} />
            </Box>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
                {metric.value}
              </Typography>
              <Typography variant="body2" color="white">
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