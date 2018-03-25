import * as React from 'react';
import AddTodo from './AddTodo';
import { Footer } from './Footer';
import VisibleTodoList from './VisibileTodoLIst';

export const TodoApp: React.SFC<{}> = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);
