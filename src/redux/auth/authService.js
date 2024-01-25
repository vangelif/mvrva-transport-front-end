import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

const register = async (userData) => {
  const response = await axios.post(API_URL, userData );

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authServices = {
  register,
  logout,
};

export default authServices;
