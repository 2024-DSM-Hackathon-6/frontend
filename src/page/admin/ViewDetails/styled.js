import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Contain = styled.div`
   display: flex;
   justify-content: center;
`

export const Container = styled.div`
   /* background-color: red; */
   width: 40%;
   /* padding: 50px 0; */
`

export const InfoWrap = styled.div`
   padding: 60px 20px 20px;
   display: flex;
   flex-direction: column;
   gap: 10px;
`

export const Top = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: end;
`

export const TitleText = styled.p`
   font-size: 28px;
   font-family: "Pretendard-Medium";
`

export const LikeFlex = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;
`

export const LikeCount = styled.p`
   font-family: "Pretendard-Regular";
   font-size: 15px;

`

export const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
`

export const UserFlex = styled.div`
   display: flex;
   gap: 10px;
`

export const UserId = styled.p`
   color: ${theme.Gray[500]};
   font-family: "Pretendard-Regular";
   font-size: 15px;
`

export const Date = styled.p`
   color: ${theme.Gray[400]};
   font-family: "Pretendard-Regular";
   font-size: 15px;
`

export const Line = styled.p`
   width: 100%;
   height: 1px;
   background-color: #D9D9D9;
`


export const Text = styled.p`
   padding: 30px 20px;
   font-family: "Pretendard-Regular";
   font-size: 20px;
   line-height: 2;
`

export const Loading = styled.h1`

`