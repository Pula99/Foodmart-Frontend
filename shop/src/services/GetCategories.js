import { useEffect } from "react";
import ApiInstance from "../configs/ApiInstance";

function GetCategories({ currentPage,onProductsFetched, category }) {
  useEffect(() => {
    fetchProducts();
  }, [currentPage, category]);

  const fetchProducts = async () => {
    try {
      const response = await ApiInstance.productServiceBff.get(`/${category}`,
        {
          params: { size: 8, page: currentPage - 1 },
        }
      );
      onProductsFetched(response.data.content, response.data.totalPages)
    } catch (error) {
        
    }
  };
  
  return null;
}

export default GetCategories;
