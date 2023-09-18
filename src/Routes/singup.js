import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import "../Views/signup.css"
import { nullLiteral } from '@babel/types';

function SignUp({onInsert}) {
    const navigate = useNavigate();
    const Home = () => {
        navigate("/");
      };
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [checkValue, setCheckValue] = useState('사용');

    const checkOnlyOne = (e) => {
        let checkItem = document.getElementsByName("useType");
        Array.prototype.forEach.call(checkItem, function (el) {
        	el.checked = false;
        });
        e.target.checked = true;
        setCheckValue(e.target.defaultValue);
	};

    const onEmailHandler = useCallback(event => {
        setEmail(event.target.value);
    },[])

    const onPasswordHandler = useCallback(event => {
        setPassword(event.target.value);
    },[])

    const onConfirmPasswordHandler = useCallback(event => {
        setConfirmPassword(event.target.value);
    },[])

    const adds3User = async () => {
        //e.preventDefault();
        
        await axios
        .post('/s3/signup',{
            name: mailRef.current.value,
            password: pwdRef.current.value
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

    const addIamUser = async () => {
        //e.preventDefault();
        
        await axios
        .post('/iam/signup',{
            name: mailRef.current.value,
            password: pwdRef.current.value
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
    const secRef = useRef(null);
    const url = "https://www.oidc.shop/realms/OIDC/protocol/openid-connect/auth?response_type=code&client_id=amazon-keycloak-openid-connect&scope=profile&redirect_uri=https://signin.aws.amazon.com/federation";

    //const url = "http://211.175.140.88:8080/auth/realms/OpenStack/protocol/saml/clients/saml-test"
    const at = () => {
        if(password != confirmpassword) {
            alert("비밀번호를 다시 입력해주세요."); 
            setEmail(null);
            setPassword(null);
            setConfirmPassword(null);
            setCheckValue(false)
        } 
        else {
            if(checkValue == "S3") {adds3User();}
            else {addIamUser();} 
            window.open(url)
        }
        //Home();
    };

    const onSubmit = useCallback(
        event => {
            setEmail(''); // 초기화
            setPassword(''); // 초기화
            setConfirmPassword('');
            //기본이벤트(새로고침) 방지
            event.preventDefault();
        }
    ,[])
    return (
        <form className="signUpPage"  onSubmit={onSubmit}>
            <header className='header'>키클록 사용자 등록</header>
            <br /> <br />
            <input 
            className='write'
            onChange={onEmailHandler}
            value={email} placeholder="이름을 입력하세요" 
            ref={mailRef}/>
            <br />
            <input 
            className='write'
            type='password'
            onChange={onPasswordHandler}
            value={password} placeholder="비밀번호를 입력하세요" 
            ref={pwdRef}/>
            <br />
            <input 
            className='write'
            type='confirmpassword'
            onChange={onConfirmPasswordHandler}
            value={confirmpassword} placeholder="비밀번호를 다시 입력하세요" 
            ref={secRef}/>
            <br />
            <input
                type="checkbox"
                id="S3"
                name="useType"
                value="S3"
                onChange={(e) => checkOnlyOne(e)}
                checked={checkValue === "S3"}
            />
            <text>S3</text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
                type="checkbox"
                id="IAM"
                name="useType"
                value="IAM"
                onChange={(e) => checkOnlyOne(e)}
                checked={checkValue === "IAM"}
            />
            <text> IAM </text>
            <br /><br />
            <button className='btn' type="submit" onClick={at}>
                OK
            </button>
        </form>
    )
}

export default SignUp;