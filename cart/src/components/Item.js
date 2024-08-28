import { Avatar, Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import RemoveProducFromCart from '../services/RemoveProductFromCart';
import UpdateCartItem from '../services/UpdateCartItem';

function Item({ item }) {
    const { quantity, productDetails, id } = item;
    const { productName, imageURL } = productDetails;

    const[count, setCount] = useState(quantity);

    const deleteItem = () => {
        try {
            RemoveProducFromCart(id);
        } catch (error) {
            console.log(error)
        }
    }

    const handleButtonRemove = () => {
        deleteItem();
    }

    const increment = async () => {
        const newCount = count + 1;
        setCount(newCount) 
        try {
            await UpdateCartItem(newCount,id);
        } catch (error) {
            console.log(error)
        }
      }
    
      const decrement =  async () => {
        if (count > 0) {
            const newCount = count - 1
          setCount(newCount)
          try {
            await UpdateCartItem(newCount,id)
          } catch (error) {
            console.log(error);
          }
         
        }
      }

    return (
        <Container>
            <Box
                sx={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    p: 3,
                    backgroundColor:"#e7ede4",
                    flexDirection: "column",
                }}
            >
                <Grid container spacing={2} alignItems="center">

                    <Grid item xs={12} sm={1} container justifyContent={{
                        xs:"center", sm:"flex-end"
                    }}>
                        <Avatar 
                            alt={productName} 
                            src={imageURL}
                            sx={{
                                width: 50,
                                height: 50
                            }} />
                    </Grid>

                    <Grid item xs={12} sm={5} container alignItems="center">
                        <Typography align="left">
                            {productName}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} container justifyContent={{
                        xs:"center", sm:"flex-end"
                    }}>
                        <Stack direction="row" spacing={5} alignItems="center">
                            <Button
                              onClick={decrement}
                              variant='outlined'
                              sx={{
                                  borderRadius: 10,
                                  color: "black",
                                  bgcolor: "#CCE6FF",
                                  '&:hover': {
                                      bgcolor: "#99CCFF",
                                  }
  
                              }}
                            >
                                -
                            </Button>
                            
                            <Typography> {count} </Typography>
                            <Button
                                onClick={increment}
                               variant='outlined'
                               sx={{
                                   borderRadius: 10,
                                   color: "black",
                                   bgcolor: "#CCE6FF",
                                   '&:hover': {
                                       bgcolor: "#99CCFF",
                                   }
   
                               }}
                            >
                                +
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={1} >
                        <Button
                            variant='contained'
                            sx={{
                                borderRadius: 10,
                                color: "white",
                                bgcolor: "#FF7074",
                                '&:hover': {
                                    bgcolor: "#C6373C",
                                }

                            }}
                            onClick={handleButtonRemove}
                        >
                            remove
                        </Button>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
}

export default Item;
