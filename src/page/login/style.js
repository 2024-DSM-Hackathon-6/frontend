import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LoginFlexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 518px;
  height: 522px;
  border-radius: 12px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginHeading = styled.p`
  margin: 0;
  margin-top: 41px;
  margin-bottom: 18px;
  font-size: 40px;
  font-weight: 400px;
  letter-spacing: 6px;
`;

export const LoginCaption = styled.p`
  margin: 8px 0;
  color: ${theme.Gray[500]};
`;

export const LoginButton = styled.button`
  margin-top: ${(props) => (props.type === "login" ? "50px" : "8px")};
  width: 360px;
  height: 52px;
  border-radius: 8px;
  border: ${(props) =>
    props.type === "signup" ? `1px solid ${theme.Main[500]}` : "none"};
  background-color: ${(props) =>
    props.type === "login" ? theme.Main[500] : "white"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.type === "login" ? "white" : theme.Main[500])};
  font-size: 18px;
  font-weight: 10px;
  cursor: pointer;
`;

export const Find = styled.div`
  text-decoration: none;
  color: ${theme.Gray[400]};
  cursor: pointer;
`;

export const FindContainer = styled.div`
  margin-top: 16px;
  display: flex;
  color: ${theme.Gray[400]};
`;

export const Input = styled.input`
  border: 1px solid ${theme.Gray[200]};
  border-radius: 12px;
  width: 360px;
  height: 54px;
  padding: 0px 24px;
  box-sizing: border-box;
`;
