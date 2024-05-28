import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`;

export const CardAddress = styled.p`
  font-size: 14px;
  color: #555;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  align-self: flex-start;
`;
