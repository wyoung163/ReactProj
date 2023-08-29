import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Views/home.css';

const Home = () => {
    const navigate = useNavigate();
 
    const addRecordByWords = () => {
      navigate("/record");
    };
    
    const addRecordByPic = () => {
        navigate("/record/pic");
      };

    return (
            <div className="App">
            <header className="App-header">
            Remember Me
            </header>
            <body className='total'>
                <div>
                <button className="add1" onClick={addRecordByWords}>+ 글로 오늘을 기억하기</button>
                <button className="add2" onClick={addRecordByPic}>+ 사진으로 오늘을 기억하기</button>
                </div>
                &nbsp;
                <div>
                <span>
                    <p className="records">추억을 넘겨보아요</p>
                </span>
                <span>
                    <p className="todo">까먹지 말아요</p>
                </span>
                </div>
            </body>
        </div>
    );
};

export default Home;