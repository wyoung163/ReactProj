import React from 'react';
//import {Link} from "react-router-dom";

const writeRecord = () => {
    return (
        <div>
            <p>제목을 지어보아요.</p>
            <input
                type="text"
                name="title"
                id="title"
                class="title"
            />
            <br/>
            <p>오늘은 언제인지 알려주세요.</p>
            <input
                type="date"
                name="today"
                id="today"
                class="today"          
            />
            <br/>
            <p>오늘을 한 단어로 표현해보아요.</p>
            <input
                type="text"
                name="word"
                id="word"
                class="word"          
            />
            <br/>
            <p>오늘을 어떻게 기억하고 싶은지 기록해보아요.</p>
            <input
                type="text"
                name="content"
                id="content"
                class="content"          
            />
            <br/><br/>
            <button type="submit" id="record">기록할게요.</button>
            <button type="reset" id="no-record">기록하지 않을게요.</button>
        </div>
    );
};

export default writeRecord;