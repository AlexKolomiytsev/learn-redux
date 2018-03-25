import * as React from 'react';
import { render as ReactDomRender } from 'react-dom';
import { Provider } from 'react-redux';

import { Root } from './components/Root';
import configureStore from './configureStore/index';

export const reactTodoList = () => {

    const store = configureStore();

    ReactDomRender(
        <Root store={ store }/>,
        document.getElementById('root')
    );
};
