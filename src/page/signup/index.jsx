import { useNavigate } from "react-router-dom";
import { signup } from "../../api/signup";
import * as S from "./style";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [text, setText] = useState({
    id: "",
    password: "",
  });

  const { id, password } = text;
  const handleText = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const signupPost = () => {
    signup(text);
  };

  return (
    <>
      <S.SignUpFlexContainer>
        <S.SignUpContainer>
          <S.SignUpHeading>회원가입</S.SignUpHeading>
          <div>
            <S.SignUpCaption>아이디</S.SignUpCaption>
            <S.Input
              name="id"
              placeholder="아이디를 입력해주세요"
              value={id}
              onChange={handleText}
            />
          </div>
          <div>
            <S.SignUpCaption>비밀번호</S.SignUpCaption>
            <S.Input
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handleText}
            />
          </div>
          <S.SignUpButton onClick={signupPost}>회원가입</S.SignUpButton>
          <S.FindContainer>
            <S.Find to="/login">로그인 하러가기{"→"}</S.Find>
          </S.FindContainer>
        </S.SignUpContainer>
      </S.SignUpFlexContainer>
    </>
  );
};

export default Signup;
