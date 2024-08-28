import React from 'react'
import { Card, CssBaseline, CardMedia, Typography, Box, Breadcrumbs, Link } from "@mui/material";
import Container from '@mui/material/Container';

function Banner() {
  return (
    <div>
      <Container maxWidth={false} disableGutters>
        <CssBaseline />

        <Card sx={{ width: '100%' }}>
          <CardMedia
            component="img"
            height="350"
            image="https://images.unsplash.com/photo-1630342654882-aed9e2e86f24?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner Image"
            sx={{
              width: '100%',
              objectFit: 'cover',
            }}

          />
        </Card>
        <Container>
          <Box
            sx={{
              display: 'contents'
            }}
          >
            <Breadcrumbs aria-label='breadcrumb' sx={{  marginTop: 3 }}>
              <Link underline='hover' color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Cart</Typography>
            </Breadcrumbs>
            
            <Typography
              variant='h4'
              sx={{
                my: 2
              }}
            > Shopping Cart
            </Typography>
          </Box>

        </Container>
      </Container>
    </div>
  )
}

export default Banner