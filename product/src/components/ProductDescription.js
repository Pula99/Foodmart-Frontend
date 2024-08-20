import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ProductDescription({ product }) {
  return (
    <>
     <Box
        my={2}
        marginBottom={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid lightgray", borderRadius: "15px" }}
      >
        <Typography
          variant="body1"
          component="div"
          dangerouslySetInnerHTML={{ __html: product.productDescription }}
        />
      </Box>
    </>
  );
}

export default ProductDescription;
