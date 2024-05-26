import { useParams } from "react-router-dom";
import data from "../JMT.json";
import styled from "styled-components";

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  line-height: 3px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;

  & h2 {
    font-size: 25px;
    margin-bottom: 25px;
  }

  & .address {
    font-size: 17px;
    color: #555;
  }

  & .distance {
    font-size: 17px;
    color: #555;
  }

  & .reviewCount {
    font-size: 17px;
    color: #555;
  }

  & .rating {
    font-size: 17px;
    color: #555;
  }
`;

const LikeMessage = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) =>
    props.liked
      ? "green"
      : "red"}; // '좋아요' 여부에 따라 텍스트 색상을 다르게 표시
`;

function RestaurantDetail() {
  const { id } = useParams(); // 특정 맛집의 id값을 URL로 넘겨 세부 페이지에서 id 값에 해당하는 정보만 표시
  const restaurant = data.find((item) => item.id === parseInt(id, 10)); // 해당 id를 가진 맛집 데이터를 찾음
  const { name, address, distance, reviewCount, rating, liked } = restaurant; // 데이터에서 필요한 요소를 추출

  return (
    <DetailWrapper>
      <Content>
        <h2>{name}</h2>
        <p className="address">{address}</p>
        <p className="distance">현재 {distance}KM 떨어져있어요!</p>
        <p className="reviewCount">{reviewCount}개의 리뷰가 있어요!</p>
        <p className="rating">평점: {rating}</p>
        <LikeMessage liked={liked}>
          {liked ? "좋아요: 좋아요!" : "좋아요: 아직 좋아요를 누르지 않았어요!"}
          {/* '좋아요' 여부에 따라 텍스트를 다르게 표시 */}
        </LikeMessage>
      </Content>
    </DetailWrapper>
  );
}

export default RestaurantDetail;
