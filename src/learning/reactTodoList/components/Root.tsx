import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

import { TodoApp } from './App';

export const Root = ({ store }) => (
    <Provider store={ store }>
        <BrowserRouter>
            <Route path='/:filter?' component={ TodoApp }/>
        </BrowserRouter>
    </Provider>
);
