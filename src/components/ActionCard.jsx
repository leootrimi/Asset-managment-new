import React from 'react';
import { Paper, Stack, IconButton, Typography } from '@mui/material';

const ActionCard = ({ icon, title, subtitle }) => (
  <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 3 }}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton size="small">
        {icon}
      </IconButton>
      <Stack direction="column">
        <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ fontFamily: 'Roboto, sans-serif', color: 'gray' }}>
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default ActionCard;
