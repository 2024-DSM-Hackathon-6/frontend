import { useState } from "react";
import * as S from "./style";

const WriteModify = () => {
  const [text, setText] = useState({
    title: "",
    detail: "",
  });
  const { title, detail } = text;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  return (
    <S.WriteModifyContainer>
      <S.WriteHeaderContainer>
        <S.FlexLayoutDiv>
          <S.WriteHeader>글 수정하기</S.WriteHeader>
          <S.WriteSubtitle>작성된 글을 수정하세요</S.WriteSubtitle>
        </S.FlexLayoutDiv>
        <S.AddWriteButton onClick={() => {}}>
          + 글 다시 추가하기
        </S.AddWriteButton>
      </S.WriteHeaderContainer>
      <S.WriteinputContainer>
        <S.WritePair>
          제목
          <S.WriteInput
            type="title"
            placeholder="제목을 입력해주세요"
            name="title"
            value={title}
            onChange={handleInput}
          />
        </S.WritePair>
        <S.WritePair>
          내용
          <S.WriteInput
            as="textarea"
            placeholder="내용을 입력해주세요"
            name="detail"
            value={detail}
            onChange={handleInput}
          />
        </S.WritePair>
      </S.WriteinputContainer>
    </S.WriteModifyContainer>
  );
};

export default WriteModify;
