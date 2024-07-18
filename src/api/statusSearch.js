import axios from "axios";

const baseUrl = process.env.REACT_APP_baseUrl;

export const statusSearch = async (postId, status) => {
  try {
    const response = await axios.get(`${baseUrl}/status/list/${postId}?status=${status}`);
    console.log(response.data.statusElements);
    return response.data.statusElements;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
