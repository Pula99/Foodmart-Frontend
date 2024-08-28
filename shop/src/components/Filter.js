import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

function Filter({ onCategoryChange }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    toggleDrawer();
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Button onClick={toggleDrawer} variant="outlined" sx={{ display: { xs: 'block', md: 'none' }, marginBottom: 2 }}>
        <FilterListIcon/> Filter
      </Button>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{ width: 150 }}
      >
        <Box
          sx={{
            width: 150,
            backgroundColor: "#f6f8f5",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">Categories</Typography>
          <List>
            <ListItemButton onClick={() => handleCategoryClick("fruit")}>
              <ListItemText primary="Fruits" />
            </ListItemButton>
            <ListItemButton onClick={() => handleCategoryClick("vegetable")}>
              <ListItemText primary="Vegetables" />
            </ListItemButton>
            <ListItemButton onClick={() => handleCategoryClick("dairy")}>
              <ListItemText primary="Dairy" />
            </ListItemButton>
            <ListItemButton onClick={() => handleCategoryClick("snacks")}>
              <ListItemText primary="Snacks" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* larger screens */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          backgroundColor: "#f6f8f5",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          p: 3,
          flexDirection: "column",
          alignItems: "",
          gap: 2,

        }}
      >
        <FilterListIcon />
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#cad6c3",
              "&:hover": {
                backgroundColor: "#bdccb4",
              },
            }}
            onClick={() => onCategoryChange("fruit")}
          >
            <Typography variant="body2" sx={{color: "black"}} >
              Fruit
            </Typography>
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#cad6c3",
              "&:hover": {
                backgroundColor: "#bdccb4",
              },
            }}
            onClick={() => onCategoryChange("vegetable")}
          >
           <Typography variant="body2" sx={{color: "black"}} >
              Vegetables
            </Typography>
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#cad6c3",
              "&:hover": {
                backgroundColor: "#bdccb4",
              },
            }}
            onClick={() => onCategoryChange("dairy")}
          >
            <Typography variant="body2" sx={{color: "black"}} >
              Dairy
            </Typography>
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#cad6c3",
              "&:hover": {
                backgroundColor: "#bdccb4",
              },
            }}
            onClick={() => onCategoryChange("snacks")}
          >
           <Typography variant="body2" sx={{color: "black"}} >
              Snacks
            </Typography>
          </Button>

        </Stack>
      </Box>
    </Container>
  );
}

export default Filter;
