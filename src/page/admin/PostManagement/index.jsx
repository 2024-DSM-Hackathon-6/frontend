import React, { useState, useEffect } from "react";
import * as S from "./styled";
// import FilterBox from "../../../components/Box/FilterBox";
import InfoCard from "../../../components/InfoCard";
// import TitleFilter from "../../../components/Input/Filter/TitleFilter";
import TitleInput from "../../../components/Input/TitleInput";
import axios from "axios";

export default function PostManagement() {
   const [data, setData] = useState([]);
   const [value, setValue] = useState("");

   useEffect(() => {
      axios.get(`https://prod-server.xquare.app/jeong/infos/web?title=${value}&date=`)
         .then(response => {
            const fetchedData = response.data.infoStatusElements.map(item => ({
               id: item.id,
               title: item.title,
               content: item.content,
               statusName: item.statusName || [] // Ensure statusName is always an array
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
                     <S.Title>글 관리하기</S.Title>
                     <S.SubTitle>작성된 글을 관리하세요</S.SubTitle>
                  </S.TitleFlex>

                  <TitleInput
                     onGetInText={(text) => setValue(text)}
                  />
                  
                  <S.Bar>작성된 글 상태 확인</S.Bar>

                  <S.CardFlex>
                     {data.map(({ id, title, content, statusName }) => (
                        <InfoCard
                           key={id}
                           title={title}
                           content={content}
                           type={statusName} 
                        />
                     ))}
                  </S.CardFlex>
               </S.Box>
            </S.Container>
         </S.Contain>
      </>
   );
}
