import React, { useState, useEffect } from "react";
import Banner from "./components/Banner.js";
import Filter from "./components/Filter.js";
import ProductGrid from "./components/ProductGrid.js";
import { CssBaseline, Grid } from "@mui/material";
import Pagination from "./components/Pagination.js";
import GetCategories from "./services/GetCategories.js";

function Screen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("fruit");
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handleFetchProdcuts = (fetchedProduct, totalFetchedPages) => {
    setProducts(fetchedProduct);
    setTotalPages(totalFetchedPages);
  }

  return (
    <div>
      <CssBaseline />
      <Banner />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} md={2} sx={{marginTop: 5}}>
          <Filter onCategoryChange={handleCategoryChange} />
        </Grid>

        <Grid item xs={12} sm={10}>
          <GetCategories
            currentPage={currentPage}
            onProductsFetched={handleFetchProdcuts}
            category={category}
          />
          <ProductGrid products={products} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Screen;
