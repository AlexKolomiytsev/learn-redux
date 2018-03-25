import { isNullOrUndefined } from 'util';

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
