import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Views/home.css';
import Login from './login';
import TodoList from '../Components/TodoList';
import TodoListItem from '../Components/TodoListItem';
import TodoInsert from './addTodo';

const Home = () => {
    const navigate = useNavigate();
    
    const SignUp = () => {
        navigate("/signup");
      };

    const Login = () => {
        navigate("/login");
      };

      
    const I = () => {
        navigate("/user");
      };
 
    const addRecordByWords = () => {
      navigate("/record");
    };
    
    const addRecordByPic = () => {
        navigate("/record/pic");
    };

    // 일정 항목
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "짧은 일기 쓰기",
            checked: true,
        },
        {
            id: 2,
            text: "잠 충분히 자기",
            checked: true,
        },
        {
            id: 3,
            text: "코드 10줄 이상 완성하기",
            checked: false,
        },
    ]);

    // 새 투두 항목 추가
    const next = useRef(4);
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: next.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            next.current++;
        },
        [todos],
    );

    // 투두 제거
    const onRemove = useCallback(
        // 일치하지 않는 항목만 모아서 새 배열 생성
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    )

    //checked 변화
    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) => 
                    todo.id === id ? {...todo, checked: !todo.checked } : todo,
                ),
            );
        },
        [todos],
    )

    return (
            <div className="App">
            <header className="App-header">
            Remember
            <button className='singup' onClick={SignUp}>SIGNUP</button>
            <button className='login' onClick={Login}>LOGIN</button>
            <button className='i' onClick={I}>I</button>
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
                    <p className="todo">
                        까먹지 말아요
                        <br />
                        <br />
                        <TodoInsert onInsert={onInsert}/>
                        <TodoList
                        todos={todos}
                        />
                    </p>
                </span>
                </div>
            </body>
        </div>
    );
};

export default Home;