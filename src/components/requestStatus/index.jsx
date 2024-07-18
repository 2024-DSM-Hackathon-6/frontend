import * as S from "./style";
import { useState, useEffect } from "react";

const RequestStatus = ({ type }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    switch (type) {
      case "문의":
        setText("문의");
        break;
      case "수정 요청":
        setText("수정 요청");
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <>
      <S.PupleBox type={type}>{text}</S.PupleBox>
    </>
  );
};

export default RequestStatus;
