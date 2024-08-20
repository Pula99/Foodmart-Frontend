import ApiInstance from '../configs/ApiInstance';

async function UserLogin(email, password) {
  try {

    const response = await ApiInstance.userAuthBff.post('/login', {
      email,
      password
    });

    const data = response.data;
    const { AccessToken, RefreshToken, UserDetails, UserId } = data;

    sessionStorage.setItem('accessToken', AccessToken);
    sessionStorage.setItem('refreshToken', RefreshToken);
    sessionStorage.setItem('user', JSON.stringify(UserDetails));
    sessionStorage.setItem('userId', JSON.stringify(UserId));

    return data;
  } catch (error) {
    console.error('There was a problem with the login request:', error);
    throw error;
  }
}

export default UserLogin;
