import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Views/home.css';
import Login from './login';
import TodoList from '../Components/TodoList';
import TodoListItem from '../Components/TodoListItem';
import TodoInsert from './addTodo';

const Home = () => {
    const navigate = useNavigate();
    
    const SignUp = () => {
        navigate("/signup");
      };

    const url = "https://www.oidc.shop/realms/OIDC/protocol/openid-connect/auth?response_type=code&client_id=amazon-keycloak-openid-connect&redirect_uri=http://localhost:3000/connect";
    
    const Login = () => {
        window.open(url);
      };

    //const url = "http://211.175.140.88:8080/auth/realms/OpenStack/protocol/saml/clients/saml-test"
    return (
            <div className="App">
            <header className="App-header">
            KeyCloak / AWS
            <button className='singup' onClick={SignUp}>SIGNUP</button>
            <button className='login' onClick={Login}>LOGIN</button>
            </header>
        </div>
    );
};

export default Home;