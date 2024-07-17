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

export const Dropdown = styled.div`
  width: 180px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${theme.Gray[500]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 21px;
  color: ${theme.Gray[700]};
  margin-bottom: 30px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const DropdownElementContainer = styled.div`
  margin-top: 45px;
  width: 180px;
  background-color: white;
  border: 1px solid ${theme.Gray[500]};
  border-radius: 8px;
  position: absolute;
  box-sizing: border-box;
  display: ${(props) => (props.status ? "block" : "none")};
`;

export const DropdownElement = styled.div`
  width: 100%;
  height: 48px;
  padding: 15px 12px;
  box-sizing: border-box;
  color: "#424242";
  display: inherit;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    border-top: 1px solid ${theme.Gray[500]};
    border-bottom: 1px solid ${theme.Gray[500]};
  }
`;

export const DropdownText = styled.p`
  margin: 0;
  color: "#525252";
  font-size: ${theme.titleSearchHeading.fontSize};
  font-weight: ${theme.titleSearchHeading.fontWeight};
`;

export const DropdownImg = styled.img`
  margin: 0;
  width: 15px;
  height: 15px;
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