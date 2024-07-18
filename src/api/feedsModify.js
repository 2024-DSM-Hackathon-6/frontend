import axios from "axios";

const baseUrl = process.env.REACT_APP_baseUrl;

export const WriteModify = async (title, content, id) => {
  const token = localStorage.getItem("token");
  await axios
    .patch(
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
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
