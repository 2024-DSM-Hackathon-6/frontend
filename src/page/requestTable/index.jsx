import { useEffect, useState } from "react";
import * as S from "./style";
import RequestStatus from "../../components/requestStatus";
import { statusSearch } from "../../api/statusSearch";

const RequestTable = () => {
  const [requestArray, setRequestArray] = useState([]);

  const fetchData = async () => {
    try {
      const data = await statusSearch(1, "");
      setRequestArray(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => fetchData, []);

  return (
    <S.RTContainer>
      <S.TableContainer>
        <S.StandardBar>
          <p>날짜</p>
          <p>아이디</p>
          <p>상태</p>
        </S.StandardBar>
        <>
          {requestArray &&
            requestArray.map((request) => {
              const { createDate, userName, name, id } = request;
              return (
                <S.RequestElements key={id}>
                  <S.CheckLable>
                    <S.CheckBox type="checkbox" onChange={() => {}} />
                    <S.RequestText w="110px">{createDate}</S.RequestText>
                    <S.RequestText w="50px">{userName}</S.RequestText>
                    <RequestStatus type={name} />
                  </S.CheckLable>
                  <S.DeleteButton onClick={() => {}}>삭제</S.DeleteButton>
                </S.RequestElements>
              );
            })}
        </>
      </S.TableContainer>
    </S.RTContainer>
  );
};

export default RequestTable;
