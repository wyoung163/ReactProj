import React from 'react';

const Record = ({idx, title, word, contents, createdBy }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h5>{createdBy}</h5>
            <hr/>
            <h6>{word}</h6>
            <hr/>
            <h5>{createdBy}</h5>
        </div>
    );
};

export default Record;