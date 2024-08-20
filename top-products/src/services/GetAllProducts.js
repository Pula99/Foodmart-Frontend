import React, { useEffect } from 'react'
import ApiInstance from '../configs/ApiInstance';


function GetAllProducts({currentPage, onProductsFetched}) {

    useEffect(() => {
        fetchProducts();
      }, [currentPage]);
    
      const fetchProducts = async () => {
        try {
            const response = await ApiInstance.productServiceBff.get("/",{
              params: { size: 4, page: currentPage - 1 },
            });
            onProductsFetched(response.data.content, response.data.totalPages)
          } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

  return null;

}

export default GetAllProducts