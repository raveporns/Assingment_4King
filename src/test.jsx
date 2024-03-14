import React from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // ใช้ฟังก์ชั่น navigate เพื่อเปลี่ยนเส้นทางไปยังเส้นทางที่ต่างกัน
    navigate('/เส้นทางที่ต้องการ');
  };

  return (
    <div>
      <h1>Test Component</h1>
      <button onClick={handleClick}>ไปที่หน้าอื่น</button>
    </div>
  );
};

export default Test;
