import { useState } from "react";
import * as S from "./style";
import { write } from "../../api/feeds";

const Write = () => {

  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const { title, content } = text;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const writePost = () => {
    write(text);
  };

  return (
    <S.WriteContainer>
      <S.WriteHeaderContainer>
        <S.FlexLayoutDiv>
          <S.WriteHeader>글 작성하기</S.WriteHeader>
          <S.WriteSubtitle>글을 작성하여 글을 공유하세요</S.WriteSubtitle>
        </S.FlexLayoutDiv>
        <S.AddWriteButton onClick={writePost}>+ 글 추가하기</S.AddWriteButton>
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
            name="content"
            value={content}
            onChange={handleInput}
          />
        </S.WritePair>
      </S.WriteinputContainer>
    </S.WriteContainer>
  );
};

export default Write;
