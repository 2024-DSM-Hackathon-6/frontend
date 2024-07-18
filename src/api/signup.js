import axios from "axios";
const baseUrl = process.env.REACT_APP_baseUrl;

export const signup = async ({ id, password }) => {
  localStorage.removeItem("token");
  await axios
    .post(`${baseUrl}/users/signup`, {
      accountId: id,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.userIdentifier);
      alert("가입되셨습니다");
    })
    .catch((error) => {
      console.log(error);
      alert("이미 있는 아이디입니다");
    });
};
