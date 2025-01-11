import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL

export const fetchAllNews = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



