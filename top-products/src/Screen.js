import React, { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid.js";
import Pagination from "./components/Pagination.js";
import GetAllProducts from "./services/GetAllProducts.js";
import { Container, Grid, CssBaseline, Typography, Divider } from "@mui/material";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [productID, setProductId] = useState();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const viewProduct = (newProductId) => {
    setProductId(newProductId);
  };

  const handleFetchedProducts = (fetchedProduct, totalFetchedPages, currentFetchedPage) => {
    setProducts(fetchedProduct);
    setTotalPages(totalFetchedPages);
  }

  return (
    <Container maxWidth="xl">
      <CssBaseline/>
      <Divider>
      <Typography variant="h3" sx={{
        fontFamily:"serif",
        my: 3,
      }}>
        Top Products
      </Typography>
      </Divider>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GetAllProducts
            onProductsFetched={handleFetchedProducts}
            currentPage={currentPage}
            setProductId={setProductId}

          />
          <ProductGrid products={products} viewProduct={viewProduct} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
