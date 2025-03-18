import React from 'react';
import { Paper, Stack, Typography, IconButton, Divider } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ReminderItem = ({ text, onDelete }) => (
  <>
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 1 }}>
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {text}
      </Typography>
      <IconButton onClick={onDelete} color="error">
        <DeleteOutlineIcon />
      </IconButton>
    </Stack>
    <Divider />
  </>
);

export default ReminderItem;
