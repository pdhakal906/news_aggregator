import axios from 'axios';

const API_BASE_URL = "https://news-aggregator-backend-0kf6.onrender.com";

export const fetchAllNews = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



