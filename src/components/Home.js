import React from "react";
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
const Home = () => {
  const history = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    history('/login');
  };

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    console.log(user);
    return (
      <div>
        <h1>ホームページ</h1>
        <p>{user.email}がログイン中です</p>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;