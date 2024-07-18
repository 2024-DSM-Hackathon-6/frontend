import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PupleBox = styled.div`
  width: ${props => props.type === "문의" ? "44px" : "74px"};
  height: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${props=>props.type==="문의"?"#FFF9db":"#F5ECFB"};
  color: ${props=>props.type==="문의" ? "#874D00" : "#6A46A5"};
  border-radius: 14px;
  font-size: 12px;
  font-weight: ${theme.TileButton.fontWeight};
`;
