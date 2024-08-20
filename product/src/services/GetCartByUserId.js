import ApiInstance from "../configs/ApiInstance";

const GetCartByUserId = async(getUserId) => {
  try {
    const userId = getUserId.replace(/^"(.*)"$/, '$1');
    const response = await ApiInstance.getByUserIdCartServiceBff.get(`${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart by user ID", error);
    throw error;
  }
}

export default GetCartByUserId;
