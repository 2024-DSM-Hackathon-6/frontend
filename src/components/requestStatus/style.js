import styled from "styled-components";
import { theme } from "../../styles/theme";


export const PupleBox = styled.div`
  width: ${props => props.type === "inquiry" ? "48px" : "78px"};
  height: 26px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props=>props.type==="inquiry"?"#FFF9db":"#F5ECFB"};
  border-radius: 14px;
  font-size: ${theme.TileButton};
`;