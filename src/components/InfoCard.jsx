import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import ContextMenuBtn from "../components/Button/ContextMenuBtn";
import RequestStatus from "../components/requestStatus"
import axios from "axios";

export default function InfoCard({ id, title, content, createDate, type, onDelete }) {
   const uniqueTypes = [...new Set(type)];

   const handleDeleteCard = async () => {
      console.log(id);
      try {
         await axios.delete(`https://prod-server.xquare.app/jeong/infos/${id}`, {
            headers: {
               "X-identifier": "qjz3ht5tdo"
            }
         });
         onDelete(id);
         
      } catch (error) {
         console.error("Error", error);
      }
   };

   return (
      <>
         <Box>
            <Flex>
               <TitleFlex>
                  <Title>{title}</Title>
                  <ContextMenuBtn onDelete={handleDeleteCard} />
               </TitleFlex>
               <Text>{content}</Text>
            </Flex>
            <Date>{createDate}</Date>
            <TagFlex>
               {uniqueTypes.map((status, index) => (
                  <RequestStatus key={index} type={status} />
               ))}
            </TagFlex>
         </Box>
      </>
   );
}

const Box = styled.div`
   width: 300px;
   padding: 13px 15px;
   border: 1px solid #D9D9D9;
   border-radius: 4px;
   font-family: "Pretendard-Regular";
   display: flex;
   flex-direction: column;
   gap: 7px;
`;

const TitleFlex = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Title = styled.p`
   font-size: 18px;
   font-family: "Pretendard-Medium";
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
`;

const Text = styled.p`
   color: ${theme.Gray[600]};
   font-size: 14px;
   display: -webkit-box;
   word-wrap: break-word;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
   overflow: hidden;
   line-height: 25px;
`;

const Date = styled.p`
   color: ${theme.Gray[500]};
   font-size: 12px;
   display: flex;
   align-items: start;
`;

const Flex = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
`;

const TagFlex = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 4px;
`;
