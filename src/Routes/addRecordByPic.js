import React, { useState } from 'react';
import '../Views/addRecord.css';
import { useNavigate } from "react-router-dom";

const WriteRecord = () => {
    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = useState(null);
 
    const backToHome = () => {
      navigate("/");
    };

    const saveImgFile = (img) => {
        const file = img.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgSrc(reader.result);
        };
        console.log(imgSrc);
    }

    return (
        <div className='total'>
            <p className='today_txt'>오늘은 언제인지 알려주세요.</p>
            <input
                type="date"
                name="today"
                id="today"
                class="today"          
            />
            <br/>
            <span className='pic_txt'>오늘을 어떻게 기억하고 사진을 남겨보아요.</span>
            <span class="button">
                <label htmlFor="pic">
                    Click and Choose Your Pic 👈 
                </label>
                <input type="file"
                    name="pic"
                    id="pic"
                    class="pic"  
                    accept="image/*" 
                    onChange={saveImgFile}        
                />
            </span>
            <br/> <br/> <br/>
            <img src={imgSrc} style={{maxWidth:"40%"}}></img>
            <br/>
            <button type="submit" className="record" id="record" onClick={backToHome}>기록</button>
            <button type="reset" className="no-record" id="no-record" onClick={backToHome}>취소</button>
        </div>
    );
};

export default WriteRecord;