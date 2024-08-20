import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box
} from "@mui/material";
import { navigateToUrl } from "single-spa";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div>
         <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh', 
            border: "2px solid lightgray", borderRadius: "15px" 
          }}
        >
          <Typography variant="h2" component="h2">
            No Products Available
          </Typography>
        </Box>
      </Container>
      </div>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Shop</Typography>
      </Breadcrumbs>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
                marginBottom: 1,
                backgroundColor: "#f6f8f5",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.imageURL}
                alt={product.title}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
                onClick={() => navigateToUrl(`/item/${product.id}`)}
              />
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>
                  {product.productName}
                </Typography>
                <Stack direction="row" spacing={30}>
                <Typography variant="body1" sx={{ color: "black" }}>
                  ${product.price}
                </Typography>
                <ShoppingCartIcon/>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductGrid;
