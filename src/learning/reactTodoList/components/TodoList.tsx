import * as React from 'react';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onClickTodo }) => {
    return <ul>
        {
            todos.map((todo) => <TodoItem key={ todo.id }
                                          onClick={ () => onClickTodo(todo.id) }
                                          { ...todo }
            />)
        }
    </ul>
};
