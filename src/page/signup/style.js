import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";

export const SignUpFlexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpContainer = styled.div`
  width: 518px;
  height: 522px;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 25px 2px gray;
`;

export const SignUpHeading = styled.p`
  margin: 0;
  margin-top: 41px;
  margin-bottom: 18px;
  font-size: 40px;
  font-weight: 400px;
  letter-spacing: 6px;
`;

export const SignUpCaption = styled.p`
  margin: 8px 0;
  color: ${theme.Gray[500]};
`;

export const SignUpButton = styled.button`
  margin-top: 80px;
  width: 360px;
  height: 52px;
  border-radius: 8px;
  border: 2px solid ${theme.Main[500]};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.Main[500]};
  font-size: 18px;
  font-weight: 10px;
  cursor: pointer;
`;

export const Find = styled(Link)`
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