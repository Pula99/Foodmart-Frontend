import React from 'react'
import { Card, CssBaseline, CardMedia} from "@mui/material";
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
    image="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Banner Image"
    sx={{
      width: '100%',
      objectFit: 'cover',
    }}
    
  />
        </Card>
      </Container>
      </div>
  )
}

export default Banner