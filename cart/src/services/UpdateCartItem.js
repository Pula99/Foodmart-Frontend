import ApiInstance from "../configs/ApiInstance"

const UpdateCartItem = async (quantity,id) => {
    try {
        const userCartId = sessionStorage.getItem("userCartId");
        const response = await ApiInstance.updateCartItem.put(`${userCartId}/${id}`,{
            quantity
        })
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
}

export default UpdateCartItem;