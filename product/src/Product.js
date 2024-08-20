import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ImageContainer from "./components/ImageContainer";
import ProductDetails from "./components/ProductDetails";
import ProductDescription from "./components/ProductDescription";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { CssBaseline, Typography } from "@mui/material";
import GetProductById from "./services/GetProductById";

function Product() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);

  const handlefetchedProduct = (fetchedProduct) => {
    setProduct(fetchedProduct)
  }

  return (

    <Container maxWidth="xl">
      <CssBaseline/>
      <GetProductById
        productId={productId}
        onProductFetched={handlefetchedProduct}
      />

      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ marginTop: 10, marginBottom: 4 }}
      >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/shop">
          Shop
        </Link>
        <Typography color="text.primary">Products</Typography>
        {product && <Typography color="text.primary">{product.productName}</Typography>}
      </Breadcrumbs>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          {product && <ImageContainer product={product} />}
        </Grid>
        <Grid item xs={12} md={5}>
          {product && <ProductDetails product={product} />}
        </Grid>
        <Grid item xs={12}>
          {product && <ProductDescription product={product} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
