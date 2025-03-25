import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import manageUserIcon from "../assets/manage-user.svg";
import personalDetails from "../assets/personal-data.svg";

const NewUser = () => {
  const [company, setCompany] = useState("");
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          height={130}
          borderRadius={2}
          style={{
            backgroundColor: "#5e231c",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack p={3} spacing={1}>
            <Typography variant="h5" color="white">
              Create new user
            </Typography>
            <Typography color="white">
              Make sure to fill all necessary informations
            </Typography>
          </Stack>
        </Grid>

        {/* Enter data */}
        <Grid container p={6} spacing={2}>
          {/* Left Grid - 3/4 width */}
          <Grid
            item
            xs={12}
            md={9}
            padding={4}
            borderRadius={2}
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Stack spacing={2}>
              {/* Personal Details */}
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  spacing={1}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={personalDetails}
                    alt="User Icon"
                    width={30}
                    height={30}
                    style={{ objectFit: "contain", backgroundColor: '#f3f4f6', padding: '3px', borderRadius: '10px'}}
                  />
                  <Typography color="gray">
                    Please fill the details below
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Full name"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                  />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
              {/* Company/Job Details */}
              <Stack spacing={2}>
                <Typography color="gray">
                  Please fill company details
                </Typography>
                <Stack direction="row" spacing={2}>
                  <FormControl fullWidth>
                    <InputLabel id="company-select-label">Company</InputLabel>
                    <Select
                      labelId="company-select-label"
                      id="company-select"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                    >
                      <MenuItem value="Matrics">Matrics</MenuItem>
                      <MenuItem value="91Life">91Life</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="company-select-label">Position</InputLabel>
                    <Select
                      labelId="company-select-label"
                      id="company-select"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                    >
                      <MenuItem value="Matrics">Matrics</MenuItem>
                      <MenuItem value="91Life">91Life</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                  />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" mt={2} spacing={2}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "red",
                  padding: "1rem",
                  px: "1.5rem",
                  borderRadius: "2rem",
                  borderColor: "red",
                  "&:hover": { backgroundColor: "red", color: "white" },
                }}
              >
                Discard
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "#0056b3",
                  padding: "1rem",
                  px: "1.5rem",
                  borderRadius: "2rem",
                  "&:hover": { backgroundColor: "#0056b3", color: "white" },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Grid>

          {/* Right Grid - 1/4 width */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Typography variant="h4">About the employer</Typography>
              <Typography>
                Enter the basic detail about the person to proceed further
              </Typography>
              <img
                src={manageUserIcon}
                alt="User Icon"
                width={50}
                height={50}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewUser;
