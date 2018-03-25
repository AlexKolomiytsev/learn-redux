import { createStore, Store } from 'redux';
import { throttle } from 'lodash';

import { loadState, saveState } from '../helpers';
import { todoApp } from '../reducers'

export interface IStore {
    todos?: any[];
    visibilityFilter?: string;
}

const configureStore = () => {
    const persistedState = loadState();

    const store: Store<IStore> = createStore(
        todoApp,
        persistedState
    );

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));

    console.log('init state ---', store.getState());

    return store;
};

export default configureStore;
