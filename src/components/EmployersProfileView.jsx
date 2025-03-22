import React from "react";
import { Paper, Stack, Typography, Grid } from "@mui/material";
import {
  XMarkIcon,
  ArrowsPointingOutIcon,
  FolderIcon,
  ArchiveBoxIcon,
  PhoneIcon,
  EnvelopeIcon,
  TagIcon
} from "@heroicons/react/24/outline";
import EmployerEquipmentTable from "./EmployerEquipmentTable";

const EmployersProfileView = ({ selectedUser, onSelectUser }) => {
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack
        direction="row"
        padding={1}
        display="flex"
        justifyContent="space-between"
        sx={{
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Stack direction="row" spacing={1}>
          <XMarkIcon className="w-6 h-6"  onClick={() => onSelectUser(null)}/>
          <ArrowsPointingOutIcon className="w-6 h-6" />
        </Stack>
        <Typography color="gray">
          {selectedUser.name}'s personal details
        </Typography>
        <Stack direction="row" spacing={1}>
          <XMarkIcon className="w-6 h-6" />
          <ArrowsPointingOutIcon className="w-6 h-6" />
        </Stack>
      </Stack>

      <Grid item padding={6}>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1} color="gray">
            <Typography
              padding={0.8}
              sx={{
                backgroundColor: "orange",
                borderRadius: "0.5em",
                color: "white",
              }}
            >
              Location
            </Typography>
            <Typography>8 rue Lavoisier 75008 Paris</Typography>
          </Stack>

          <Typography variant="h4">{selectedUser.name}</Typography>

          <Stack direction="row" spacing={3}>
            <Stack direction="row" spacing={1}>
              <FolderIcon className="w-6 h-6" />
              <Typography>Documents</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <ArchiveBoxIcon className="w-6 h-6" />
              <Typography>Archive</Typography>
            </Stack>
          </Stack>
          <hr />
          <Stack>
            <Stack direction="row" spacing={5} alignContent="center">
                <Stack spacing={1.3}>
              <Stack direction="row" spacing={0.5}  alignItems='center'>
                <PhoneIcon className="w-4 h-4" />
                <Typography color="gray">Tel.</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems='center'>
                <EnvelopeIcon className="w-4 h-4" />
                <Typography color="gray">Email</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems='center'>
                <TagIcon className="w-4 h-4" />
                <Typography color="gray">Status</Typography>
              </Stack>
              </Stack>
              <Stack spacing={1.3}>
              <Typography>+383 43 874 283</Typography>
              <Typography>leootrim221@gmail.com</Typography>
              <Typography color="green">Active</Typography>
              </Stack>
            </Stack>
          </Stack>

          <EmployerEquipmentTable />
        </Stack>
      </Grid>
    </Paper>
  );
};

export default EmployersProfileView;
