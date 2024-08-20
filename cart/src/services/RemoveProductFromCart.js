import ApiInstance from '../configs/ApiInstance'

const RemoveProducFromCart = async(id) => {
    try {
        const userCartId = sessionStorage.getItem("userCartId");
        const response = await ApiInstance.removeProductFromCart.delete(`${userCartId}/${id}`)
        window.location.reload();
        return response.data;
    } catch (error) {
        console.error("Error when deleting product from cart")
    }
}

export default RemoveProducFromCart;