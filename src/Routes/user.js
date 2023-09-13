import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function I() {
    const navigate = useNavigate();
    const Home = () => {
        navigate("/");
      };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getUser = async () => {
        //e.preventDefault();

        await axios
        .get('/user',
        { 
            headers: { 
                "access_token": localStorage.getItem("access_token"),
                "refresh_token": localStorage.getItem("refresh_token")
            }
        })
        .then((response) => {
            console.log(response.data);		//정상 통신 후 응답된 메시지 출력	
            setEmail(response.data.email);
            //setPassword(response.data.password);
        });
        // .catch((error)=>{
        //     console.log(error);				//오류발생시 실행
        // })
    };

    useEffect(() => {
        getUser();
    },[]);

    const onSubmit = useCallback(
        event => {
            //기본이벤트(새로고침) 방지
            event.preventDefault();
        }
    ,[])
    return (
        <header>I information
            <br/>
            <text> ID: {email} </text>
            <br/>
            <br/>
            <text> PWD: {email} </text>
        </header>
        // <form className="userPage"  onSubmit={onSubmit}>
        //     <header className='header'>Welcome! You are in login page.</header>
        //     <br /> <br />
        //     <input 
        //     className='write'
        //     onChange={onEmailHandler}
        //     emial={email} placeholder="이메일을 입력하세요" 
        //     ref={mailRef}/>
        //     <br />
        //     <input 
        //     className='write'
        //     type='password'
        //     onChange={onPasswordHandler}
        //     password={password} placeholder="비밀번호를 입력하세요" 
        //     ref={pwdRef}/>
        //     <br /><br />
        //     <button className='btn' type="submit" onClick={at}>
        //         OK
        //     </button>
        // </form>
    )
}

export default I;