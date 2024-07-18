import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/Icon/searchIcon.svg"

export default function TitleInput( props ) {
   const [text, setText] = useState();

   useEffect(() => {
      props.onGetInText(text);
    }, [text]);

    const getData = (e) => {
      setText(e.target.value);
    }

   return (
      <Box>
         <Input type="text" placeholder="글 제목 검색하기" onChange={getData} />
         <SearchIcon/>
      </Box>
   )
}

const Box = styled.div`
   width: 400px;
   display: flex;
   background-color: #F5F5F5;
   padding: 14px 20px;
   border-radius: 8px;
`

const Input = styled.input`
   width: 96%;
   outline: none;
   border: none;
   font-size: 15px;
   background-color: transparent;

   &::placeholder {
      color: #5E5E5E;
   }
`