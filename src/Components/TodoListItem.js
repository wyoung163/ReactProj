import React from 'react';
import "../Views/todo.css"

function TodoListItem({ todo, onRemove }) {
    const { id, text, checked } = todo;
    return (
      <li className="Todo">
        <div className={checked}>
          <input type='checkbox'/> {text}
        </div>
        <div className="edit">   
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
        </div>
      </li>
    );
}

export default TodoListItem;