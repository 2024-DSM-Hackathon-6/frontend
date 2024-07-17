import * as S from "./style";
import { useState, useEffect } from "react";

const RequestStatus = ({ type }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    switch (type) {
      case "inquiry":
        setText("문의");
        break;
      case "modify":
        setText("수정요청");
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
