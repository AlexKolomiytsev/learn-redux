import { isNullOrUndefined } from 'util';

export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        default:
            return todos;
    }
};


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (isNullOrUndefined(serializedState)) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }

};

export const saveState = (state) => {

    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        /* ... */
    }

};
