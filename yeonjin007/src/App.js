//입력 필드의 상태를 관리하며, value와 onChange를 반환함
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from './Components/Card';
import Details from './Components/Details';
import jmtData from './JMT.json';
import useInput from './hooks/useInput';

function App() {
  const [restaurants, setRestaurants] = useState(jmtData);
  const search = useInput(''); //검색어 관리하는 역할

  // 좋아요:) 상태를 토글하는 함수
  const toggleLike = id => {
    const updatedRestaurants = restaurants.map(restaurant => {
      if (restaurant.id === id) {
        return { ...restaurant, liked: !restaurant.liked };
      }
      return restaurant;
    });
    setRestaurants(updatedRestaurants);
  };

  // 음식점을 필터링하는 역할
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(search.value.toLowerCase())
  );

  return (
    <Router>
      <div>
        <input
          type="text"
          placeholder="Search restaurants..."
          {...search}
          style={{ margin: '20px', padding: '10px', width: '300px' }}
        />
        <Routes>
          <Route path="/" element={
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center' 
              }}
              >
              {filteredRestaurants.map(item => ( //card부분을 link로 묶어줫숩니다. 카드 어디를 누르든 상세정보(디테일)로 이동함!
                <Link to={`/${item.id}`} key={item.id}>
                  <Card
                    name={item.name}
                    address={item.address}
                    imageUrl={item.imageUrl}
                    liked={item.liked}
                    toggleLike={() => toggleLike(item.id)}
                  />
                </Link>
              ))}
            </div>
          } />
          <Route path="/:id" element={<Details restaurants={restaurants} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//전체 맛집 목록의 상태를 관리하고, 각 맛집의 좋아요 상태를 변경하는 toggleLike 함수를 구현함. 
//각 Card 컴포넌트에는 그 맛집의 현재 좋아요 상태와 이 상태를 변경할 수 있는 함수를 props로 전달함.

