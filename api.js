import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/auth';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
    throw error;
  }
};

export const verifyUser = async (verificationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/verify`, verificationData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      console.error('No response received from server');
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};
