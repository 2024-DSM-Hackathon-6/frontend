import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useParams } from 'react-router-dom';
import { ReactComponent as LikeIcon } from "../../../assets/Icon/LikeIcon.svg";
import axios from "axios";

export default function ViewDetails() {
   const { id } = useParams();
   const [postDetails, setPostDetails] = useState(null);

   useEffect(() => {
      const fetchPostDetails = async () => {
         try {
            const response = await axios.get(`https://prod-server.xquare.app/jeong/feeds/detail/${id}`, {
               headers: {
                  'X-identifier': 'qjz3ht5tdo'
               }
            });
            const { title, content, createDate, userName, likeCount } = response.data;
            setPostDetails({ title, content, createDate, userName, likeCount });
         } catch (error) {
            console.error("에러", error);
         }
      };

      fetchPostDetails();
   }, [id]);

   if (!postDetails) {
      return <div>Loading...</div>;
   }

   const { title, content, createDate, userName, likeCount } = postDetails;

   return (
      <S.Contain>
         <S.Container>
            <S.InfoWrap>
               <S.Top>
                  <S.TitleText>{title}</S.TitleText>
                  <S.LikeFlex>
                     <LikeIcon />
                     <S.LikeCount>{likeCount}</S.LikeCount>
                  </S.LikeFlex>
               </S.Top>
               <S.Bottom>
                  <S.UserFlex>
                     <S.UserId>작성자</S.UserId>
                     <S.UserId>{userName}</S.UserId>
                  </S.UserFlex>
                  <S.Date>{createDate}</S.Date>
               </S.Bottom>
            </S.InfoWrap>
            <S.Line />
            <S.Text>{content}</S.Text>
         </S.Container>
      </S.Contain>
   );
}
