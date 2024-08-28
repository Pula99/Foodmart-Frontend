import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Stack
} from "@mui/material";
import { navigateToUrl } from "single-spa";

const handleViewClick = (productId) => {
  navigateToUrl(`/item/${productId}`);
  window.location.reload();
  window.scrollTo(0, 0);
};

function ProductGrid({ products }) {
  return (
    <Container maxWidth="xl" sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
            <Box sx={{ width: '330px', height: '330px' }}>
              <Button
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${product.imageURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fff',
                  borderRadius: '20px',
                  marginBottom: 1
                }}
                onClick={() => handleViewClick(product.id)}
              >

              </Button>
              <Container>
              <Stack spacing={0} >
                <Typography variant="h6" sx={{
                  fontFamily: "serif"
                }}>
                  {product.productName}
                </Typography>


                <Typography variant="body2" sx={{
                   fontFamily: "serif"
                }}>
                  ${product.price}
                </Typography>


              </Stack>
              </Container>
            </Box>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductGrid;
