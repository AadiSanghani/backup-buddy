import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Link,
  createTheme, 
  ThemeProvider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Define interface for component props
interface ModalLoginPopUpProps {
  open: boolean;
  handleClose: () => void;
}

async function auth() {
  console.log("Auth function called");
  try {
    const response = await fetch('http://127.0.0.1:3000/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include' // Ensure cookies are sent with the request
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("This is the data coming from the modal", data);

    // Redirect the user to the Google authentication URL
    window.location.href = data.url;
  } catch (error) {
    console.error("Failed to fetch", error);
  }
}

function ModalLoginPopUp({ open, handleClose: originalHandleClose }: ModalLoginPopUpProps) {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and sign-up
  const navigate = useNavigate(); // Get navigate function

  const theme = createTheme({
    palette: {
      primary: {
        main: "#7ECFA2",
      }
    },
    typography: {
      fontFamily: "Poppins",
    },
  });

  // Enhance the handleClose function to also reset the sign-up state
  const handleClose = () => {
    setIsSignUp(false);  // Reset the sign-up state
    originalHandleClose();  // Call the original handleClose prop
  };

  const handleToggleView = () => {
    setIsSignUp(!isSignUp);
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in button clicked");
    auth();
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}  // Use the enhanced handleClose function
        aria-labelledby="login-dialog-title"
        aria-describedby="login-dialog-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%' },
          maxWidth: '450px',
          bgcolor: 'background.paper',
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: '16px'
        }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
          {isSignUp ? (
            <>
              <IconButton
                aria-label="back"
                onClick={handleToggleView}
                sx={{ position: 'absolute', left: 8, top: 8, color: theme.palette.grey[500] }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h4" sx={{ mb: 2 }} align='center'>
                Sign Up
              </Typography>
              <TextField fullWidth variant="outlined" label="Name" margin="dense" sx={{ mb: 2 }} />
              <TextField fullWidth variant="outlined" label="E-mail address" margin="dense" sx={{ mb: 2 }} />
              <TextField fullWidth variant="outlined" label="Password" type="password" margin="dense" sx={{ mb: 2 }} />
              <TextField fullWidth variant="outlined" label="Confirm Password" type="password" margin="dense" sx={{ mb: 2 }} />
              <Button fullWidth variant="contained" sx={{ mb: 2 }}>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h4" sx={{ mb: 2 }} align='center'>
                Backup Buddy
              </Typography>
              <Typography variant="h5" sx={{ mt: 1 }} align='center'>
                One account
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }} align='center'>
                Many possibilities
              </Typography>
              <TextField fullWidth variant="outlined" label="E-mail address" margin="dense" sx={{ mb: 2 }} />
              <TextField fullWidth variant="outlined" label="Password" type="password" margin="dense" sx={{ mb: 2 }} />
              <Link href="#" variant="body2" sx={{ display: 'block', color: '#F06543 !important', textAlign: 'right', mb: 2 }}>Forgot password?</Link>
              <Button fullWidth variant="contained" sx={{ mb: 1 }}>
                Sign in
              </Button>
              <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 2 }} onClick={handleGoogleSignIn}>
                Sign in with Google
              </Button>
              <Typography component="div" sx={{ textAlign: 'center', mt: 2 }}>
                <Typography component="span" sx={{ color: 'black' }}>
                  Not a member yet?
                </Typography>{' '}
                <Link href="#" variant="body2" sx={{ color: '#F06543' }} onClick={handleToggleView}>
                  Sign Up
                </Link>
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default ModalLoginPopUp;
