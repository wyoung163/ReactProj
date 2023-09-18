import React, { useCallback, useRef, useState, useParams } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Views/home.css';

const Connect = () => {
    const navigate = useNavigate();

    function get_query(){
        var url = document.location.href;
        var qs =  window.location.search.split('&');
    
        for(var i = 0, result = {}; i < qs.length; i++){
            qs[i] = qs[i].split('=');
            result[qs[i][0]] = decodeURIComponent(qs[i][1])
        }
         return result;
    }

    const Connect = () => {
        console.log(localStorage.getItem("loginUrl"));
      };
    // const param = useParams().code;
    // console.log(param);

    const userFederation = async () => {
        const code = get_query();

        await axios
        .get('/oidc',{
            params: {code: code.code}
        })
        .then((response) => {
            console.log(response.data);		//정상 통신 후 응답된 메시지 출력
            localStorage.setItem("loginUrl", response.data.url);
            window.open(response.data);
        });
        // .catch((error)=>{
        //     console.log(error);				//오류발생시 실행
        // })
    };

    const at = () => {
        userFederation(); 
        Connect();
    };

    //const url = "http://211.175.140.88:8080/auth/realms/OpenStack/protocol/saml/clients/saml-test"
    return (
        <div className="App">
        <header className="App-header">
            AWS Management console 접속
        </header>
        </div>
    );
};

export default Connect;