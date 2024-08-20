import ApiInstance from "../configs/ApiInstance";

const AddItem = async (cartId,product,count) => {
    try {
        const productId = product.id;
        const quantity = count;
   
        const cart = cartId.replace(/^"(.*)"$/, '$1');
        const response = await ApiInstance.addItemToCartServiceBff.post( `${cart}`,{
            productId,
            quantity
        })
            const data = response.data
            console.log("Added Item Data", data)
            return data;
    } catch (error) {
        console.error("Error", error)
    }
}

export default AddItem;