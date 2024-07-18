import axios from "axios";

const baseUrl = process.env.REACT_APP_baseUrl;

export const write = async ({ title, content }) => {
  const token = localStorage.getItem("token");
  await axios
    .post(
      `${baseUrl}/feeds`,
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
