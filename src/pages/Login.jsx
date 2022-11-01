import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">OnlyChat</span>
        <span className="title">Logowanie</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="adres email" />
          <input type="password" placeholder="hasło" />
          <button>Zaloguj</button>
          {err && <span>Coś poszło nie tak...</span>}
        </form>
        <p>
          Nie masz jeszcze konta? <Link to="/register">Zarejestruj się</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
