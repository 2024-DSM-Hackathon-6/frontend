import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/theme";
import { ReactComponent as Logo } from "../assets/Icon/Logo.svg"

export default function Header() {
  const navigate = useNavigate();

  const Data = ["글 조회", "글 관리"];

  const handleNavigation = (index) => {
    if (index === 0) {
      navigate("/all");
    } else if (index === 1) {
      navigate("/management");
    }
  };

  const handleWriteNavigation = () => {
    navigate("/write");
  };

  return (
    <>
      <Container>
        <LeftItemWrap>
          <Logo/>
          {Data.map((item, index) => (
            <HandleText key={index} onClick={() => handleNavigation(index)}>
              {item}
            </HandleText>
          ))}
        </LeftItemWrap>

        <RightItemWrap>
          <WriteBtn onClick={handleWriteNavigation}>글 작성하기</WriteBtn>
        </RightItemWrap>
      </Container>
    </>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 22px 180px;
  white-space: nowrap;
  background-color: white;
  justify-content: space-between;
  font-family: "Pretendard-Regular";
`;

const HandleText = styled.button`
  font-size: 16px;
  color: #757575;
  background-color: transparent;
  border: none;
  padding: 5px 15px;
  border-radius: 8px;

  &:hover {
    background-color: ${theme.Gray[200]};
    padding: 5px 15px;
  }
`;

const LeftItemWrap = styled.div`
  display: flex;
  gap: 27px;
  align-items: center;
`;

const TestLogo = styled.div``;

const RightItemWrap = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 678px) {
    display: none;
  }
`;

const WriteBtn = styled.button`
  background-color: white;
  border: 1px solid ${theme.Gray[400]};
  color: ${theme.Gray[500]};
  border-radius: 8px;
  padding: 5px 15px;

  &:hover {
    background-color: ${theme.Gray[200]};
  }
`;
