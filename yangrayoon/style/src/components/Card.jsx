import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
//주소 이름 이미지만 카드에 포함

const CardSection = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 4px #d4d4d4;
  position: relative;
  width: 550px;
`;
const CardName = styled.h3`
  margin: 30px;
  text-align: left;
`;
const CardAddress = styled.p`
  text-align: left;
  margin: 30px;
  color: gray;
`;

const CardImg = styled.img`
  border-radius: 20px;
  width: 130px;
  height: 130px;
  margin: 5px;
  padding: 0px;
`;
const LikeButton = styled.button`
  font-size: 22px;
  cursor: pointer;
  background-color: #f2f2f2;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Card = ({ id, name, address, imageUrl, liked, onToggleLike }) => {
  return (
    <CardLink to={`/restaurant/${id}`}>
      {/*카드 어는 곳을 눌러도 상세페이지로 연결됨*/}

      <CardSection>
        <CardImg src={imageUrl} />
        <div>
          <CardName>
            <h3>{name}</h3>
          </CardName>
          <CardAddress>
            <p>{address}</p>
          </CardAddress>
          <LikeButton
            onClick={(e) => {
              e.preventDefault(); //버튼 클릭 이벤트를 막고
              onToggleLike(id); // 함수 호출
            }}
          >
            {liked ? "🤍" : "😵"} {/*버튼 누르면 바뀜*/}
          </LikeButton>
        </div>
      </CardSection>
    </CardLink>
  );
};

export default Card;
