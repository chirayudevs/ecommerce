import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutOutlined from '@ant-design/icons/lib/icons/LogoutOutlined';

const Logout = () => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    localStorage.clear();
    navigate('/login');

  };

  return (
    <div>
      <div onClick={onClickHandler}> <LogoutOutlined /> </div>
    </div>
  )
};

export default Logout;
