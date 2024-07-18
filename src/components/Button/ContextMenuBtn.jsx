import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { ReactComponent as ContextMenuIcon } from "../../assets/Icon/contextMenuIcon.svg";

export default function ContextMenuBtn({ onDelete }) {
   const [showDeleteBtn, setShowDeleteBtn] = useState(false);

   const handleBtnClick = () => {
      setShowDeleteBtn((prevState) => !prevState);
   };

   const handleDeleteClick = async () => {
      try {
         await onDelete(); 
      } catch (error) {
         console.error("삭제", error);

      }
   };

   return (
      <>
         <Gap>
            {showDeleteBtn && (
               <DeleteBtn onClick={handleDeleteClick}>글 삭제하기</DeleteBtn>
            )}
            <Btn onClick={handleBtnClick}>
               <ContextMenuIcon />
            </Btn>
         </Gap>
      </>
   );
}

const Gap = styled.div`
   display: flex;
   gap: 10px;
`;

const Btn = styled.button`
   /* width: 30px; */
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   /* border-radius: 50%; */
   background-color: #ffffff;

   /* &:hover {
      background-color: #f5f5f57a;
      transition: 0.5s;
   } */
`;

const DeleteBtn = styled.button`
   background-color: #ffffff;
   border: none;
   padding: 7px 15px;
   border-radius: 5px;
   box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.142);
   color: ${theme.Red["error 500"]};
   white-space: nowrap;
`;
