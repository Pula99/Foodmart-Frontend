import ApiInstance from "../configs/ApiInstance";


const GetProductById = async(productId) => {
  try {
    const response = await ApiInstance.getProductById.get(`${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart by product ID", error);
    throw error;
  }
}

export default GetProductById;
