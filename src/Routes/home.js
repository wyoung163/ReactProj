import React from 'react';
import { useNavigate } from "react-router-dom";

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
            <body>
            <div>
                오늘의 기록을 남겨보세요.
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="add" onClick={addRecord}>기록 남기기</button>
            </div>
            </body>
        </div>
    );
};

export default Home;