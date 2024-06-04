import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// 정보 컨테이너 스타일 정의
const InformationContainer = styled.div`
  display: flex;
  width: 400px;
  margin-top: 10px;
  flex-direction: column;
  border: 1px solid #000;
`;

// 레스토랑 이름 스타일 정의
const Name = styled.h1``;

// 텍스트 스타일 정의
const Text = styled.p``;

// 좋아요 상태에 따른 텍스트 색상 스타일 정의
const Like = styled.span`
  color: ${(props) => (props.liked ? "green" : "red")};
`;

// Information 컴포넌트 정의
// 레스토랑 리스트를 props로 받아 URL 매개변수에 해당하는 레스토랑의 세부 정보를 표시
const Information = ({ restaurants }) => {
  const { id } = useParams(); // URL 매개변수에서 id를 가져옴
  const item = restaurants.find((item) => item.id === parseInt(id)); // id에 해당하는 레스토랑 찾기

  return (
    <>
      <InformationContainer>
        <Name>{item.name}</Name>
        <Text>{item.address}</Text>
        <Text>현재 {item.distance}KM 떨어져있어요!</Text>
        <Text>{item.reviewCount}개의 리뷰가 있어요!</Text>
        <Text>평점 : {item.rating}</Text>
        <Text>
          좋아요 :{" "}
          <Like liked={item.liked}>
            {item.liked ? "좋아요!" : "아직 좋아요를 누르지 않았어요"}
          </Like>
        </Text>
      </InformationContainer>
    </>
  );
};

export default Information;
