import React, { useCallback, useRef, useState } from 'react';
import "../Views/todo.css"
import { useNavigate } from "react-router-dom";

function TodoInsert({onInsert}) {
    const [value, setValue] = useState('');

    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback(
        e => {
            setValue(''); //value 초기화
            //기본이벤트(새로고침) 방지
            e.preventDefault();
        }
    ,[value])
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            className='writeTodo'
            onChange={onChange}
            value={value} placeholder="할 일을 입력하세요" />
            &nbsp; &nbsp;
            <button className='btn' type="submit" >
                OK
            </button>
        </form>
    )
}

export default TodoInsert;