import { useState } from "react";
import * as S from "./style";
import dropdownImg from "../../assets/dropdownImg.svg";

const RequestTable = () => {
  const [dropdownArrow, setDropdownArrow] = useState(dropdownImg);
  const [requestArray, setRequestArray] = useState([
    // {
    //   date: "2024-07-17",
    //   id: "heedda",
    //   status: "modify",
    // },
    // {
    //   date: "2024-07-12",
    //   id: "whf",
    //   status: "modify",
    // },
    // {
    //   date: "2024-07-14",
    //   id: "dfsdf",
    //   status: "modify",
    // },
  ]);
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState("전체");
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };
  const handleDropdownTitle = (title) => {
    setDropdownTitle(title);
  };

  return (
    <S.RTContainer>
      <S.TableContainer>
        <S.Dropdown onClick={handleDropdownStatus}>
          <S.DropdownText>{dropdownTitle}</S.DropdownText>
          <S.DropdownImg src={dropdownArrow} alt="" />
        </S.Dropdown>
        <S.DropdownElementContainer status={dropdownStatus}>
          <S.DropdownElement onClick={() => handleDropdownTitle("전체")}>
            전체
          </S.DropdownElement>
          <S.DropdownElement onClick={() => handleDropdownTitle("문의")}>
            문의
          </S.DropdownElement>
          <S.DropdownElement onClick={() => handleDropdownTitle("수정요청")}>
            수정요청
          </S.DropdownElement>
        </S.DropdownElementContainer>
        <S.StandardBar>
          <p>날짜</p>
          <p>아이디</p>
          <p>상태</p>
        </S.StandardBar>
        {requestArray.map((request) => {
          const { date, id, status } = request;
          return (
            <S.RequestElements>
              <S.CheckLable>
                <S.CheckBox type="checkbox" onChange={() => {}} />
                <S.RequestText w="100px">{date}</S.RequestText>
                <S.RequestText w="50px">{id}</S.RequestText>
                <S.RequestText w="50px">{status}</S.RequestText>
              </S.CheckLable>
              <S.DeleteButton onClick={() => {}}>삭제</S.DeleteButton>
            </S.RequestElements>
          );
        })}
      </S.TableContainer>
    </S.RTContainer>
  );
};

export default RequestTable;
