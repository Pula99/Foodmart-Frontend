import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#45523e",
        color: 'white',
        p: 4,
        mt: '0',
         
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={12}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" gutterBottom sx={{fontFamily: "serif", letterSpacing: ".4rem"}}>
              FoodMart
            </Typography>
            <Typography variant="h6">
            Your one-stop shop for fresh groceries and everyday essentials, delivered to your door. Shop smart, live better with FoodMart!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{my:4}}>
            <Typography variant="h6" gutterBottom>
              Pages
            </Typography>
            <Link href="/home" underline="hover" color="inherit" sx={{ display: 'block', my: 1 }}>
              Home
            </Link>
            <Link href="/shop" underline="hover" color="inherit" sx={{ display: 'block', my: 1 }}>
              Shop
            </Link>
            <Link href="/about" underline="hover" color="inherit" sx={{ display: 'block', my: 1 }}>
              About Us
            </Link>
        
          </Grid>
          <Grid item xs={12} sm={4}  sx={{my:4}}>
            <Typography variant="h6" gutterBottom>
              My Account
            </Typography>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', my: 1 }}>
              Profile
            </Link>
            <Link href="#"  underline="hover" color="inherit" sx={{ display: 'block', my: 1 }}>
            Order History
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
