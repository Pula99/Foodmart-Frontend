import ApiInstance from "../configs/ApiInstance"

const ConfirmCart = async () => {
    try {
        const userCartId = sessionStorage.getItem("userCartId");
        console.log("idddddd",userCartId)
        const response = await ApiInstance.updateCart.put(`${userCartId}`,{
             confirmationStatus: "CONFIRMED"
        })
        const data = response.data
        sessionStorage.removeItem('userCartId');
        return data;
    } catch (error) {
        console.error("Error", error)
    }
}

export default ConfirmCart;