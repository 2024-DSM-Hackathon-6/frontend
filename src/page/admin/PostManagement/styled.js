import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Contain = styled.div`
   display: flex;
   justify-content: center;
`

export const Container = styled.div`
   width: 68%;
   height: 100%;
   font-family: "Pretendard-Medium";
   padding: 50px 0;
`

export const Box = styled.div`
   display: flex;
   flex-direction: column;
   gap: 25px;
   
`

export const TitleFlex = styled.div`
   display: flex;
   align-items: end;
   gap: 15px;
`

export const Title = styled.p`
   font-size: 26px;
`

export const SubTitle = styled.p`
   color: #8C8C8C;
   font-size: 17px;
`

export const CardFlex = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   gap: 22px 16px;
`

export const Bar = styled.div`
   box-sizing: border-box;
   width: 100%;
   color: white;
   border-radius: 5px;
   background-color: ${theme.Main[500]};
   font-size: 15px;
   padding: 8px 20px;
   font-family: "Pretendard-Regular";
`