import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WriteHeader = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 1000px;
`;

export const WriteModifyContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WriteSubtitle = styled.p`
  margin: 0;
  color: ${theme.Gray[500]};
  margin-left: 3px;
`;

export const WriteHeaderContainer = styled.div`
  width: 900px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const WriteinputContainer = styled.div`
  width: 900px;
  height: 550px;
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 5px 5px 25px 2px gray;
`;

export const WritePair = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 40px;
  color: black;
  font-size: 20px;
  font-weight: 100px;
`;

export const WriteInput = styled.input`
  width: 750px;
  background-color: ${theme.Gray[200]};
  border: none;
  height: ${(props) => (props.type === "title" ? "50px" : "400px")};
  border-radius: 8px;
  font-size: 20px;
  padding: 15px 25px;
  box-sizing: border-box;
  resize: none;
`;

export const WriteButton = styled.button`
  margin-left: 10px;
  height: 35px;
  color: ${(p) => (p.type === "add" ? theme.Main[500] : theme.Red[600])};
  background-color: white;
  border: 1px solid
    ${(p) => (p.type === "add" ? theme.Main[500] : theme.Red[600])};
  border-radius: 8px;
  padding: 4px 20px;
  cursor: pointer;
`;

export const FlexLayoutDiv = styled.div`
  display: flex;
  align-items: end;
`;
