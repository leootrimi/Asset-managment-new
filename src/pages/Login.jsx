import React from "react";
import loginImage from "../assets/loginImage.png";
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
    <Box sx={{ p: 5 }} display='flex' justifyContent='center' height='90vh' justifyItems='center'>
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
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
              <Button sx={{ borderRadius: 3 }} variant="outlined" startIcon={<Google />} fullWidth color="#4F959D">
                Log in with Google
              </Button>
              <Button sx={{ borderRadius: 3 }} variant="outlined" startIcon={<Apple />} fullWidth color="#4F959D">
                Log in with Apple
              </Button>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Box sx={{ flex: 1, height: 1, bgcolor: "text.disabled" }} />
              <Typography align="center" color="textSecondary">
                or
              </Typography>
              <Box sx={{ flex: 1, height: 1, bgcolor: "text.disabled" }} />
            </Stack>

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
            sx={{ backgroundImage: "linear-gradient(to bottom, #4F959D, #2C6B73)", borderRadius: 3, p: 2, color: "white", py: 5 }}
            spacing={1}
          >
            <Typography variant="h6" fontWeight="bold" align="center">
              The simplest way to manage your workforce
            </Typography>
            <Typography variant="body2" align="center">
              Enter your credentials to access your account
            </Typography>
            <Box
              component="img"
              src={loginImage}
              alt="Dashboard Preview"
              sx={{ borderRadius: 2, borderColor: '#2C6B73', borderWidth: '1px' }}
            />
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginPage;
