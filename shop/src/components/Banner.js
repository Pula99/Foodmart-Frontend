import React from 'react';
import { Card, CardMedia} from '@mui/material';

function Banner() {
  return (
    <Card sx={{ maxWidth: '100%'}}>
      <CardMedia
        component="img"
        height="300"
        image="https://wallpaper.forfun.com/fetch/7f/7f63cfaa546c03b355c6425cf6641921.jpeg"
        alt="Banner Image"
      />
    </Card>
  );
}

export default Banner