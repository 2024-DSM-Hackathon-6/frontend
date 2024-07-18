import { useEffect, useState } from "react";
import * as S from "./style";
import { writeDelete, writeModify, writeRead } from "../../api/feedsModify";

const WriteModify = (id) => {
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

  const writeData = async () => {
    try {
      const data = await writeRead(9);
      console.log(data);
      setText({ title: data.title, content: data.content });
      console.log(text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const writeModifyData = async () => {
    try {
      await writeModify(title, content, 9);
      alert("수정되었습니다");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWriteData = async () => {
    try {
      await writeDelete(9);
      alert("삭제되었습니다");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => writeData, []);

  return (
    <S.WriteModifyContainer>
      <S.WriteHeaderContainer>
        <S.FlexLayoutDiv>
          <S.WriteHeader>글 수정하기</S.WriteHeader>
          <S.WriteSubtitle>작성된 글을 수정하세요</S.WriteSubtitle>
        </S.FlexLayoutDiv>
        <div>
          <S.WriteButton onClick={writeModifyData} type="add">
            + 글 다시 추가하기
          </S.WriteButton>
          <S.WriteButton onClick={deleteWriteData} type="delete">
            글 삭제하기
          </S.WriteButton>
        </div>
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
    </S.WriteModifyContainer>
  );
};

export default WriteModify;
