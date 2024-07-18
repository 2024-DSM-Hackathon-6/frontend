import styled from "styled-components";
import { theme } from "../../styles/theme";

export const RTContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TableContainer = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 90px;
`;

export const StandardBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${theme.Main[500]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 110px;
  padding: 10px 190px;
  color: white;
  box-sizing: border-box;
  margin-bottom: 18px;
  margin-top: 50px;
`;

export const RequestElements = styled.div`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${theme.Gray[300]};
  display: flex;
  justify-content: space-between;
  padding: 14px 50px;
  box-sizing: border-box;
`;

export const RequestText = styled.p`
  width: ${(props) => props.w};
  margin: 0;
  color: ${theme.Gray[800]};
  font-size: 20px;
  font-weight: 100px;
`;

export const DeleteButton = styled.button`
  border: 1px solid ${theme.Red[500]};
  border-radius: 13px;
  color: ${theme.Red[500]};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
`;

export const CheckLable = styled.label`
  display: flex;
  gap: 80px;
`;
