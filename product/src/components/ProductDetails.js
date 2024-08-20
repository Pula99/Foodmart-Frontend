import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CreateNewCart from "../services/CreateCart";
import AddItem from "../services/AddItem";
import GetCartByUserId from "../services/GetCartByUserId";
import Alert from "@mui/material/Alert";

function ProductDetails({ product }) {

  const [count, setCount] = useState(0);
  const [cartId, setCartId] = useState(getUserCartId);
  const [showAlert, setShowAlert] = useState(false);
  const getUserId = sessionStorage.getItem('userId');
  const getUserCartId = sessionStorage.getItem("userCartId");

  useEffect(() => {
    checkUserCart();
  }, []);

  const checkUserCart = async () => {
    if (getUserId) {
      await getUserCart();
      console.log(cartId);
      console.log("User cart Id storage", getUserCartId);

      if (!cartId && getUserCartId == "undefined") {
        console.log("getUserCartId is null")
        await createCart();
        return;
      }
    } else {
      setShowAlert(true);
    }
  }

  const getUserCart = async () => {
    try {
      const userCartData = await GetCartByUserId(getUserId);
      setCartId(userCartData.id);
      sessionStorage.setItem("userCartId", userCartData.id);
      console.log("User cart Id", userCartData.id);
      return userCartData;
    } catch (error) {
      console.log("Error fetching Cart Data", error);
    }
  }

  const createCart = async () => {
    try {
      const cartData = await CreateNewCart(getUserId);
      setCartId(cartData.id);
      sessionStorage.setItem("userCartId", cartData.id);
      console.log("New Cart Data", cartData);
      return cartData;
    } catch (error) {
      console.error("Error creating cart", error);
    }
  }

  const addItemsToCart = async () => {
    if (cartId || getUserCartId) {
      try {
        const cartId = getUserCartId;
        const itemData = await AddItem(cartId, product, count);
        console.log("Item Data", itemData);
        setCount(0);
        return itemData;
      } catch (error) {
        console.log("Error adding item to cart", error);
      }
    } else {
      console.error("Cart ID is not set. Please create a cart first.");
    }
  }

  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      return newCount;
    });
  }

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }

  const handleAddToCart = async () => {

    if (!getUserId) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);

    await addItemsToCart();
  };

  return (
    <>

      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
        }}
      >
        {product.productName}
      </Typography>


      <Box my={2} display="flex" alignItems="center" gap={4} p={2}>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4} md={4}>
            <Stack spacing={0}>
              <Typography variant="subtitle1">Price:</Typography>
              <Typography variant="subtitle1">Product Name:</Typography>
              <Typography variant="subtitle1">Availability:</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={0}>
              <Typography variant="subtitle1">${product.price}</Typography>
              <Typography variant="subtitle1">{product.productName}</Typography>
              <Typography variant="subtitle1">{ }</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        width={300}
        my={2}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: "1px solid lightgray", borderRadius: "15px" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              sx={{ borderRadius: "15px" }}
              onClick={decrement}
            >-</Button>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                textAlign: "center",
                marginTop: 1,
              }}
            >
              {count}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              sx={{ borderRadius: "15px" }}
              onClick={increment}
            >+</Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{
                color: "white",
                borderRadius: "15px",
                backgroundColor: "#819d6f",
                "&:hover": {
                  backgroundColor: "#779465",
                }
              }}
              onClick={handleAddToCart}
            >Check Cart</Button>
          </Grid>
        </Grid>
      </Box>
      {showAlert && <Alert severity="info">Please login to add items to your cart.</Alert>}
    </>
  );
}

export default ProductDetails;
