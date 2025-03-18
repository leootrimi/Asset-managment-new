import React from 'react';
import { Paper, Stack, Typography, Skeleton, CardContent } from '@mui/material';
import ReminderItem from './ReminderItem';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const reminders = [
    "Assess any new risks identified in the morning meeting.",
    "Follow up on pending client approvals.",
    "Prepare the weekly project update report."
  ];

const RemindersCard = ({isLoading}) => (

  <Paper elevation={3} sx={{ p: 2, borderRadius: 3, mt: 2 }}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography>
        <AccessTimeOutlinedIcon color="warning" />
      </Typography>
      <Typography>Reminders</Typography>
    </Stack>

    <Typography sx={{ mt: 2}}>
        Today
    </Typography>
    {/* {reminders.map((reminder, index) => (
        <ReminderItem key={index} text={reminder} />
      ))} */}

      { isLoading ?
       (
       <>
       <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Stack style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Skeleton variant="rectangular" width={500} height={15} />
          <Skeleton variant='circular' width={40} height={40} />
        </Stack>
        <Stack style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Skeleton variant="rectangular" width={500} height={15} />
          <Skeleton variant='circular' width={40} height={40} />
        </Stack>
        <Stack style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Skeleton variant="rectangular" width={500} height={15} />
          <Skeleton variant='circular' width={40} height={40} />
        </Stack>
       </CardContent>
       </>
      ) : (
      <>
          {reminders.map((reminder, index) => (
        <ReminderItem key={index} text={reminder} />
      ))}
      </>
    )}
  </Paper>
);

export default RemindersCard;
