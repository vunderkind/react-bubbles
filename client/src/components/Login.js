import React, { useState } from "react";
import "../Login.css";
// import {Redirect} from 'react-router-dom';
import Logo from "../logo.png";
import {axioswithAuth} from './axioswithAuth';

function Login(props) {
  const [login, setLogin] = useState({username: "", password: ""});
  const isLoggedIn = true;

  // function postLogin() {
  // }
  

  // if (isLoggedIn) {
  //   return <Redirect to="/bubbles" />;
  // }

  function handleSubmit(e){
      e.preventDefault();
      axioswithAuth()
      .post('/login', login)
      .then(res=>
        localStorage.setItem('token', res.data.payload))
        props.history.push('/bubbles')
  };

  console.log(login);

  const handleUsername= (e) => setLogin({...login, username: e.target.value,});
  const handlePass= (e) => setLogin({...login, password: e.target.value,})

  return (
    
    <div className="Login">
    <img src={Logo} className="Logo" alt="logo"/>
      <form onSubmit={handleSubmit}>
        <input type = "text" placeholder="username" onChange={handleUsername}/>
        <input type = "password" placeholder="password" onChange={handlePass}/>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;