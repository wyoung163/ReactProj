import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Views/home.css';

const Home = () => {
    const navigate = useNavigate();
 
    const addRecord = () => {
      navigate("/record");
    };
    
    return (
            <div className="App">
            <header className="App-header">
            Remember Me
            </header>
            <body className='total'>
                <div>
                <button className="add" onClick={addRecord}>+ 오늘의 기록을 남겨보세요</button>
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