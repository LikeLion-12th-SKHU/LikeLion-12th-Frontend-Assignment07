import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../JMT.json";

const DetailContainer = styled.div`
  margin-top: 35px;
  margin-left: 35px;
`;

const DetailWrap = styled.div`
  width: 500px;
  border: 1px solid #dddddd;
  background-color: #eee;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 2px;
  display: flex;
  flex-direction: column;
`;

const DetailName = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const DetailTxt = styled.p`
  font-size: 15px;
  color: #555;
`;

const DetailMsg = styled.p`
  font-size: 15px;
  color: ${(props) => (props.liked ? "green" : "red")};
`;

function RestaurantDetail() {
  const { id } = useParams();

  const restaurantData = data.find((item) => item.id === parseInt(id, 10));
  const { name, address, distance, reviewCount, rating, liked } =
    restaurantData;

  return (
    <DetailContainer>
      <DetailWrap>
        <DetailName>{name}</DetailName>
        <DetailTxt>{address}</DetailTxt>
        <DetailTxt>현재 {distance}KM 떨어져 있어요!</DetailTxt>
        <DetailTxt>{reviewCount}개의 리뷰가 있어요!</DetailTxt>
        <DetailTxt>평점: {rating}</DetailTxt>
        <DetailMsg liked={liked}>
          {liked ? "좋아요: 좋아요!" : "좋아요: 아직 좋아요를 누르지 않았어요!"}
        </DetailMsg>
      </DetailWrap>
    </DetailContainer>
  );
}

export default RestaurantDetail;
