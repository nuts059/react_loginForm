import React from "react";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const SignUp = () => {
  const { user } = useAuthContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value);
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" />
        </div>
        <div>
          <button>登録</button>
        </div>
        <div>
          ログインは<Link to={'/login'}>こちら</Link>から
        </div>
      </form>
    </div>
  );
};

export default SignUp;