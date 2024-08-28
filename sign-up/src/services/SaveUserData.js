import ApitInstance from "../configs/ApiInstance"

const SaveUserData = async (name, email, address, mobileNumber) => {
    try {
        const userName = name;
        const contactNumber = mobileNumber;
        const response = await ApitInstance.userMicroService.post("", {
            userName,
            email,
            address,
            contactNumber
        });
        const data = response.data;
        return data
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

export default SaveUserData;