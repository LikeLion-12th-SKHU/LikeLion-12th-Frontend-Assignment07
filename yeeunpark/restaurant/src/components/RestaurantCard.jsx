import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 15px;
  display: flex;
`;

const CardWrap = styled.div`
  width: 550px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  background-color: #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const CardImg = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  margin: 15px;
  border-radius: 10px;
`;

const CardTxt = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
  color: black;
`;

const CardAddress = styled.p`
  font-size: 17px;
  color: #bbb;
`;

const CardBtn = styled.button`
  font-size: 25px;
  margin-left: 15px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

function RestaurantCard({ restaurant }) {
  const { id, name, address, imageUrl } = restaurant;
  const [liked, setLiked] = useState(restaurant.liked); //좋아요 상태 관리

  const handleLike = () => {
    //좋아요 버튼 클릭시 호출되는 핸들러
    setLiked(!liked); //버튼을 누르면 상태를 반전
    restaurant.liked = !liked; //restaurant 객체의 속성 업데이트
  };

  return (
    <CardContainer>
      <Link
        to={`/${id}`} //id를 통해 경로 설정
        style={{ textDecoration: "none" }}>
        <CardWrap>
          <CardImg src={imageUrl} />
          <CardTxt>
            <CardName>{name}</CardName>
            <CardAddress>{address}</CardAddress>
          </CardTxt>
        </CardWrap>
      </Link>
      <CardBtn
        liked={liked} //좋아요 상태에 따라 버튼 아이콘 변경
        onClick={handleLike}>
        {liked ? "🩵" : "😵"}
      </CardBtn>
    </CardContainer>
  );
}

export default RestaurantCard;
