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
  color: gray;
`;

const DetailMsg = styled.p`
  font-size: 15px;
  color: ${(props) =>
    props.liked ? "green" : "red"}; //liked prop에 따라 텍스트 색상 변경
`;

function RestaurantDetail() {
  const { id } = useParams(); //경로에서 id값을 가져옴

  const restaurantData = data.find(function (item) {
    return item.id === Number(id);
  }); //JSON 데이터에서 해당 id를 가진 음식점 서치

  const { name, address, distance, reviewCount, rating, liked } =
    restaurantData; //데이터 저장

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
          {/* 좋아요 여부에 따라 메세지 다르게 출력 */}
        </DetailMsg>
      </DetailWrap>
    </DetailContainer>
  );
}

export default RestaurantDetail;
