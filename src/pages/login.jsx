import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router';
import { app } from '../firebaseConfig';
import { Auth } from '../context/AuthContext';
import { LoginForm } from '../components';
import { NavBar } from '../components';

const Login = ({ history }) => {
  const { usuario } = useContext(Auth);
  const [error, seterror] = useState({});

  useEffect(() => {
    if (usuario) {
      history.push('/');
    }
  }, [history, usuario]);

  const firebaseLogin = async (e) => {
    e.preventDefault();
    console.log(e.target, e.target.elements);
    const { mail, pswd } = e.target.elements;

    await app
      .auth()
      .signInWithEmailAndPassword(mail.value, pswd.value)
      .then((result) => {
        console.log(result);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        seterror(error.message);
      });
  };

  return (
    <>
      <NavBar />
      <section className="login-page">
        <LoginForm loginFunction={firebaseLogin} error={error} />
      </section>
    </>
  );
};
export default withRouter(Login);
