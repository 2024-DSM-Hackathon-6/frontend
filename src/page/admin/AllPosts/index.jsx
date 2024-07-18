import React, { useState, useEffect } from "react";
import * as S from "../AllPosts/styled";
import TitleInput from "../../../components/Input/TitleInput";
import UserCard from "../../../components/UserCard";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function AllPosts() {
   const [data, setData] = useState([]);
   const [value, setValue] = useState("");

   useEffect(() => {
      //console.log(value);
      axios.get(`https://prod-server.xquare.app/jeong/feeds/search?title=${value}`, {
         headers: {
            'X-identifier': 'qjz3ht5tdo'
         }
      })
      .then(response => {
         const fetchedData = response.data.feedElements.map(item => ({
            id: item.id,
            userName: item.userName,
            title: item.title,
            content: item.content,
            createDate: item.createDate
         }));
         setData(fetchedData);
      })
      .catch(error => {
         console.error("에러 메세지", error);
      });
   }, [value]);

   return (
      <>
         <S.Contain>
            <S.Container>
               <S.Box>
                  <S.TitleFlex>
                     <S.Title>전체 글 확인</S.Title>
                     <S.SubTitle>작성된 모든 글을 조회하세요</S.SubTitle>
                  </S.TitleFlex>

                  <TitleInput 
                     onGetInText={(text) => setValue(text)}
                  />

                  <S.CardFlex>
                     {data.map(({ id, userName, title, content, createDate }) => (
                        <Link to={`/post/${id}`} key={id}>
                           <UserCard
                              id={id}
                              userName={userName}
                              title={title}
                              content={content}
                              createDate={createDate}
                           />
                        </Link>
                     ))}
                  </S.CardFlex>
               </S.Box>
            </S.Container>
         </S.Contain>
      </>
   );
}
