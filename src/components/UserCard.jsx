import styled from "styled-components";
import { theme } from "../styles/theme";
import { useNavigate } from "react-router-dom";


export default function InfoCard({ id, userName, title, content, createDate }) {
   const navigate = useNavigate();
   
   const handleClick = () => {
      navigate(`/post/${id}`);
   };

   return (
      <>
         <Box onClick={handleClick}>
            <Flex>
               <UserId>{userName}</UserId>
               <TitleFlex>
                  <Title>{title}</Title>
               </TitleFlex>

               <Text>{content}</Text>
            </Flex>
            <Date>{createDate}</Date>
         </Box>
      </>
   );
}

const Box = styled.div`
 box-sizing: border-box;
   width: 332px;
   height: 163px;
   padding: 13px 15px;
   border: 1px solid #D9D9D9;
   border-radius: 4px;
   font-family: "Pretendard-Regular";
   display: flex;
   flex-direction: column;
   gap: 7px;

`

const UserId = styled.p`
   color: ${theme.Gray[500]};
   font-size: 13px;
   display: flex;
   align-items: start;
`

const TitleFlex = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 4px 0;
`

const Title = styled.p`
   font-size: 18px;
   font-family: "Pretendard-Medium";
   text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
  color: black;
`

const Text = styled.p`
   color: ${theme.Gray[600]};
   font-size: 14px;
   /* width: 300px; */
   display: -webkit-box;
   word-wrap: break-word;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
   overflow: hidden;
   line-height: 25px;
`

const Date = styled.p`
   color: ${theme.Gray[500]};
   font-size: 12px;
   display: flex;
   align-items: start;
`

const Flex = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
`

const TagFlex = styled.div`
`