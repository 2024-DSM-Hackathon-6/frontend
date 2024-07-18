import axios from "axios";

const baseUrl = process.env.REACT_APP_baseUrl;

export const writeModify = async (title, content, id) => {
  try {
    const token = localStorage.getItem("token");
    await axios.patch(
      `${baseUrl}/feeds/${id}`,
      {
        title,
        content,
      },
      {
        headers: {
          "X-identifier": token,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const writeRead = async (id) => {
  try {
    const token = await localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/feeds/detail/${id}`, {
      headers: {
        "X-identifier": token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const writeDelete = async (id) => {
  try {
    const token = await localStorage.getItem("token");
    await axios.delete(`${baseUrl}/feeds/${id}`, {
      headers: {
        "X-identifier": token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
