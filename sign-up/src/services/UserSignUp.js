import ApiInstance from '../configs/ApiInstance';

async function UserSignUp(name, email, address, mobileNumber, password) {
  try {
    const response = await ApiInstance.userAuthBff.post("/register" , {
      name,
      email,
      address,
      mobileNumber,
      password
    });

    const data = response.data;


    return data;
  } catch (error) {
    if (error.response) {

      console.error('Error:', error.response.data);
      throw new Error(error.response.data.message || 'There was a problem with the signup request');
    } else if (error.request) {
      console.error('Error:', error.request);
      throw new Error('No response received from the server');
    } else {
      console.error('Error:', error.message);
      throw new Error(error.message);
    }
  }
}

export default UserSignUp;
