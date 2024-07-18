import * as S from "./style";
import { useState, useEffect } from "react";

const RequestStatus = ({ type }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    switch (type) {
      case "INQUIRY":
        setText("문의");
        break;
      case "FIX":
        setText("수정 요청");
        break;
      default:
        break;
    }
  }, [type]);
  console.log(type)

  return (
    <>
      <S.PupleBox type={type}>{type}</S.PupleBox>
    </>
  );
};

export default RequestStatus;
