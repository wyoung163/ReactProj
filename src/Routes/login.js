import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import "../Views/login.css"

function Login({onInsert}) {
    const navigate = useNavigate();
    const Home = () => {
        navigate("/");
      };
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = useCallback(event => {
        setEmail(event.target.value);
    },[])

    const onPasswordHandler = useCallback(event => {
        setPassword(event.target.value);
    },[])

    const addUser = async () => {
        //e.preventDefault();
        
        await axios
        .post('/login',{
            email: mailRef.current.value,
            password:"pswd"
        })
        .then((response) => {
            console.log(response.data);		//정상 통신 후 응답된 메시지 출력	
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_tokeny", response.data.refresh_token);
        });
        // .catch((error)=>{
        //     console.log(error);				//오류발생시 실행
        // })
    };
        
  
    const mailRef = useRef(null)
    const pwdRef = useRef(null);
    const at = () => {
        addUser(); 
        Home();
    };

    const onSubmit = useCallback(
        event => {
            setEmail(''); // 초기화
            setPassword(''); // 초기화
            //기본이벤트(새로고침) 방지
            event.preventDefault();
        }
    ,[])
    return (
        <form className="loginPage"  onSubmit={onSubmit}>
            <header className='header'>Welcome! You are in login page.</header>
            <br /> <br />
            <input 
            className='write'
            onChange={onEmailHandler}
            emial={email} placeholder="이메일을 입력하세요" 
            ref={mailRef}/>
            <br />
            <input 
            className='write'
            type='password'
            onChange={onPasswordHandler}
            password={password} placeholder="비밀번호를 입력하세요" 
            ref={pwdRef}/>
            <br /><br />
            <button className='btn' type="submit" onClick={at}>
                OK
            </button>
        </form>
    )
}

export default Login;