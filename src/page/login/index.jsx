import * as S from "./style";
import { useState } from "react";

const Login = () => {
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

  return (
    <S.LoginFlexContainer>
      <S.LoginContainer>
        <S.LoginHeading>로그인</S.LoginHeading>
        <div>
          <S.LoginCaption>아이디</S.LoginCaption>
          <S.Input
            name="id"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={handleText}
          />
        </div>
        <div>
          <S.LoginCaption>비밀번호</S.LoginCaption>
          <S.Input
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handleText}
          />
        </div>
        <S.LoginButton type="login" onClick={() => {}}>
          로그인
        </S.LoginButton>
        <S.LoginButton type="signup" onClick={() => {}}>
          회원가입
        </S.LoginButton>
        <S.FindContainer>
          <S.Find onClick={() => {}}>아이디 찾기</S.Find>&nbsp;|&nbsp;
          <S.Find onClick={() => {}}>비밀번호 찾기</S.Find>
        </S.FindContainer>
      </S.LoginContainer>
    </S.LoginFlexContainer>
  );
};

export default Login;