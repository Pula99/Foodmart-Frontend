
import React from "react";
import { Box, Container, Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Container maxWidth="xl">
      <Box display="flex" mt={2} sx={{justifyContent: "center" , marginBottom:4, marginTop:4 }}>
        <MuiPagination
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
          shape="circular"
        />
      </Box>
    </Container>
  );
};

export default Pagination;
