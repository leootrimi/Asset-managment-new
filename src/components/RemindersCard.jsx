import React, { useState } from 'react';
import { Paper, Stack, Typography, Skeleton, CardContent, IconButton } from '@mui/material';
import ReminderItem from './ReminderItem';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const reminders = [
  "Assess any new risks identified in the morning meeting.",
  "Follow up on pending client approvals.",
  "Prepare the weekly project update report."
];

const RemindersCard = ({ isLoading }) => {
  const [showReminders, setShowReminders] = useState(true);
  const [showNextWeek, setShowNextWeek] = useState(true);

  const toggleReminders = () => {
    setShowReminders((prev) => !prev);
  };

  const toggleRemindersWeek = () => {
    setShowNextWeek((prev) => !prev);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3, mt: 2 }}>
      {isLoading ? (
        <>
          <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={100} height={15} />
            </Stack>

            <Skeleton variant="rectangular" width={100} height={15} />
          </CardContent>

          <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Skeleton variant="rectangular" width={500} height={15} />
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
            <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Skeleton variant="rectangular" width={500} height={15} />
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
            <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Skeleton variant="rectangular" width={500} height={15} />
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
          </CardContent>
        </>
      ) : (
        <>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography>
              <AccessTimeOutlinedIcon color="warning" />
            </Typography>
            <Typography>Reminders</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
            <Typography>Today</Typography>
            <IconButton onClick={toggleReminders}>
              {showReminders ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Stack>

          {showReminders && reminders.map((reminder, index) => (
            <ReminderItem key={index} text={reminder} />
          ))}

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
            <Typography>Next Week</Typography>
            <IconButton onClick={toggleRemindersWeek}>
              {showNextWeek ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Stack>

          {showNextWeek && reminders.map((reminder, index) => (
            <ReminderItem key={index} text={reminder} />
          ))}
        </>
      )}
    </Paper>
  );
};

export default RemindersCard;
