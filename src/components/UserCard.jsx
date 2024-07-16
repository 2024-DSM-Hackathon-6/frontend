import styled from "styled-components";
import { theme } from "../styles/theme";
import StatusTag from "../components/StatusTag";

export default function UserCard({ user, title, text, date }) {
   return (
      <>
         <Box>
            <Flex>
               <UserId>{user}</UserId>
               <Title>{title}</Title>
               <Text>{text}</Text>
            </Flex>
            <Date>{date}</Date>
            {/* <TagFlex>
               <StatusTag/>
            </TagFlex>
             */}
            
         </Box>
      </>
   )
}

const Box = styled.div`
   width: 300px;
   /* height: 142px; */
   padding: 13px 15px;
   border: 1px solid #D9D9D9;
   border-radius: 4px;
   font-family: "Pretendard-Regular";
   display: flex;
   flex-direction: column;
   gap: 5px;
   /* gap: 3px; */
`

const UserId = styled.p`
   color: ${theme.Gray[500]};
   font-size: 13px;
   display: flex;
   align-items: start;
`

const Title = styled.p`
   font-size: 18px;
   font-family: "Pretendard-Medium";
   text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
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