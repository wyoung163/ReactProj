import React from 'react';
import '../Views/addRecord.css';
import { useNavigate } from "react-router-dom";

const WriteRecord = () => {
    const navigate = useNavigate();
 
    const backToHome = () => {
      navigate("/");
    };

    return (
        <div className='total'>
            <p className='title_txt'>제목을 지어보아요.</p>
            <input
                type="text"
                name="title"
                id="title"
                class="title"
            />
            <br/>
            <p className='today_txt'>오늘은 언제인지 알려주세요.</p>
            <input
                type="date"
                name="today"
                id="today"
                class="today"          
            />
            <br/>
            <p className='word_txt'>오늘을 한 단어로 표현해보아요.</p>
            <input
                type="text"
                name="word"
                id="word"
                class="word"          
            />
            <br/>
            <p className='content_txt'>오늘을 어떻게 기억하고 싶은지 기록해보아요.</p>
            <textarea
                rows={6}
                cols={70}
                name="content"
                id="content"
                class="content"          
            />
            <br/><br/>
            <button type="submit" className="record" id="record" onClick={backToHome}>기록</button>
            <button type="reset" className="no-record" id="no-record" onClick={backToHome}>취소</button>
        </div>
    );
};

export default WriteRecord;