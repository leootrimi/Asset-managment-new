import React, { useState } from "react";
import {
  Paper,
  Stack,
  Typography,
  IconButton,
  Skeleton,
  Box
} from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const initialReminders = [
  "Assess any new risks identified in the morning meeting.",
  "Follow up on pending client approvals.",
  "Prepare the weekly project update report.",
];

const RemindersCard = ({ isLoading }) => {
  const [reminders, setReminders] = useState(initialReminders);
  const [showReminders, setShowReminders] = useState(true);
  const [showNextWeek, setShowNextWeek] = useState(true);

  const toggleReminders = () => {
    setShowReminders((prev) => !prev);
  };

  const toggleRemindersWeek = () => {
    setShowNextWeek((prev) => !prev);
  };

  const deleteReminder = (index) => {
    setReminders((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3, mt: 2 }}>
      {isLoading ? (
        <>
          <Stack direction='row' spacing={1}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width={60} height={30} />
          </Stack>
          <Skeleton variant="text" width={60} height={30} />
          <Stack spacing={2}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width={360} height={30} />
          </Stack>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width={360} height={30} />
          </Stack>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width={360} height={30} />
          </Stack>
          </Stack>
        </>
      ) : (
        <>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography>
              <AccessTimeOutlinedIcon color="warning" />
            </Typography>
            <Typography>Reminders</Typography>
          </Stack>

          {/* Today's Reminders */}
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <h3 className="text-md font-medium text-gray-700 dark:text-gray-300">Today</h3>
              <button onClick={toggleReminders} className="text-gray-600 dark:text-gray-400">
                {showReminders ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>

            {showReminders && (
              <ol className="relative border-s border-gray-200 dark:border-[#205781] mt-2">
                {reminders.map((reminder, index) => (
                  <li key={index} className="mb-4 ms-4 flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-[#111827] dark:bg-[#111827]"></div>
                      <p className="text-base font-normal text-black-500 dark:text-black-400">{reminder}</p>
                    </div>
                    <IconButton onClick={() => deleteReminder(index)} size="small">
                      <DeleteOutlineIcon className="text-red-500 dark:text-red-400" />
                    </IconButton>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <h3 className="text-md font-medium text-gray-700 dark:text-gray-300">Today</h3>
              <button onClick={toggleRemindersWeek} className="text-gray-600 dark:text-gray-400">
                {showNextWeek ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>

            {showReminders && (
              <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-2">
                {reminders.map((reminder, index) => (
                  <li key={index} className="mb-4 ms-4 flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-[#111827] dark:bg-[#111827]"></div>
                      <p className="text-base font-normal text-black-500 dark:text-black-400">{reminder}</p>
                    </div>
                    <IconButton onClick={() => deleteReminder(index)} size="small">
                      <DeleteOutlineIcon className="text-red-500 dark:text-red-400" />
                    </IconButton>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </>
      )}
    </Paper>
  );
};

export default RemindersCard;
