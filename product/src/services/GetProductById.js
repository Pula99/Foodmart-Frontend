import React, { useEffect, useState } from "react";
import ApiInstance from "../configs/ApiInstance";

function GetProductById({ productId, onProductFetched }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      setLoading(true);
      fetchedProduct();
    }
  }, [productId]);


  const fetchedProduct = async () => {
    try {
      const response = await ApiInstance.productServiceBff.get(`/${productId}`)
      onProductFetched(response.data)
    } catch (error) {
      
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  

}

export default GetProductById;
