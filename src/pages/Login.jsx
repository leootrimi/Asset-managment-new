import React from "react";
import userImage from "../assets/personal-data.svg";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { Google, Apple } from "@mui/icons-material";

const LoginPage = () => {
  return (
    <Box sx={{ p: 5 }} display='flex' justifyContent='center' height='100vh' justifyItems='center'>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={10} sx={{ p: 3 }} alignItems='center'>
          {/* Left Side - Login Form */}
          <Stack spacing={2} sx={{ p: 3, flex: 1, width: '70%' }}>
            <Typography variant="h5" fontWeight="bold">
              Get Started Now
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Enter your credentials to access your account
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row'}} spacing={1}>
              <Button sx={{ borderRadius: 3 }} variant="outlined" startIcon={<Google />} fullWidth>
                Log in with Google
              </Button>
              <Button sx={{ borderRadius: 3 }} variant="outlined" startIcon={<Apple />} fullWidth>
                Log in with Apple
              </Button>
            </Stack>


            <Typography align="center" color="textSecondary">
              or
            </Typography>

            <TextField label="Email Address" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />

            <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="body2">I agree to the Terms & Privacy</Typography>}
            />

            <Button variant="contained" fullWidth sx={{ bgcolor: "#4F959D", color: "white", borderRadius: 2, py: 1.5 }}>
              Login
            </Button>
            <Stack direction='row' alignItems='center'>
              <Typography>
                Doo't have an account?
              </Typography>
              <Button> Sign Up</Button>
            </Stack>

          </Stack>

          {/* Right Side - Image and Description */}
          <Stack
            flex={1}
            justifyContent="center"
            alignItems="center"
            sx={{ bgcolor: "#4F959D", borderRadius: 3, p: 2, color: "white", py: 10 }}
          >
            <Typography variant="h6" fontWeight="bold" align="center">
              The simplest way to manage your workforce
            </Typography>
            <Typography variant="body2" align="center">
              Enter your credentials to access your account
            </Typography>
            <Box
              component="img"
              src={userImage}
              alt="Dashboard Preview"
              sx={{ maxWidth: 300, borderRadius: 2 }}
            />
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginPage;
