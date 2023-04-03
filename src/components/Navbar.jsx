import * as React from 'react';
// top navbar
import AppBar from '@mui/material/AppBar';
// UI elements (buttons, text, icons)
import Toolbar from '@mui/material/Toolbar';
// consistent text styles
import Typography from '@mui/material/Typography';
// responsive layout, auto centered
import Container from '@mui/material/Container';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* attach a classname to style using external CSS */}
          <Typography variant='h2' component='div' sx={{ flexGrow: 1 }}>
            GlitchBank
          </Typography>
          <Typography variant='h6' component='p'>
            Welcome to our Mortgage Calculator
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
