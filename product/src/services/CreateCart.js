import ApiInstance from '../configs/ApiInstance'

const CreateNewCart = async (getUserId) => {
        try {
            
            const userId = getUserId.replace(/^"(.*)"$/, '$1');
            const response = await ApiInstance.newCartServiceBff.post("carts",{
                userId,
                confirmationStatus: "NOT_CONFIRMED"
        })
            const data = response.data
            console.log("Cart Created",data)
            return data;
        } catch (error) {
            console.error("Error", error)
        }
    }


export default CreateNewCart;