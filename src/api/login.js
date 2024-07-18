import axios from "axios";
const baseUrl = process.env.REACT_APP_baseUrl;

export const login = async ({ id, password }) => {
  localStorage.removeItem("token");
  await axios
    .post(`${baseUrl}/users/signin`, {
      accountId: id,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.userIdentifier);
      alert("로그인 되셨습니다");
    })
    .catch((error) => {
      console.log(error);
      alert("아이디와 비밀번호를 확인해주세요");
    });
};
