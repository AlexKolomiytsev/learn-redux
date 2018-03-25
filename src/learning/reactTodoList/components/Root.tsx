import * as React from 'react';
import { Provider } from 'react-redux';
import { TodoApp } from './App';

export const Root = ({ store }) => (
    <Provider store={ store }>
        <TodoApp />
    </Provider>
);
