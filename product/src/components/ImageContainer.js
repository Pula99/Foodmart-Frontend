import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function ImageContainer({ product }) {
  return (
    <Card
      sx={{
        maxWidth: "auto",
        borderRadius: "15px",
      }}
    >
      <CardMedia
        sx={{ height: 500 }}
        image={product.imageURL}
        alt="Product Image"
      />
    </Card>
  );
}

export default ImageContainer;
