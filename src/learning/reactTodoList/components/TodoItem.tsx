import * as React from 'react';

export const TodoItem = ({ onClick, text, completed }) => {
    return <li onClick={ onClick }
               style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        { text }
    </li>
};
