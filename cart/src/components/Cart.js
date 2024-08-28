import { Container, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Item from './Item';
import GetCartByUserId from '../services/GetCartByUserId';
import GetProductById from '../services/GetProductById';

function Cart() {
  const [cartData, setCartData] = useState([]);
  const getUserId = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const data = await GetCartByUserId(getUserId);
        sessionStorage.setItem("userCartId",data.id);
        const cartItemsWithProductDetails = await Promise.all(
          data.cartItems.map(async (item) => {
            const productDetails = await GetProductById(item.productId);
            return {
              ...item,
              productDetails
            };
          })
        );
        setCartData(cartItemsWithProductDetails);
      } catch (error) {
        console.log("Error fetching cart", error);
      }
    };
    fetchUserCart();
  }, [getUserId]);

  return (
    <Container>
      <Stack spacing={2} my={4}>
        {cartData.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Stack>
    </Container>
  );
}

export default Cart;
