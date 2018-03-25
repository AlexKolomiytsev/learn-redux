import { createStore } from 'redux';

const ADD_TODO_ACTION = (payload) => ({ type: 'ADD_TODO', payload });
const TOGGLE_TODO_ACTION = (payload) => ({ type: 'TOGGLE_TODO', payload });

export const reducerCompositionWithArrays = () => {

    const todo = (state, action) => {
        const { payload } = action;

        switch(action.type) {
            case 'ADD_TODO':
                return {
                    id: payload.id,
                    text: payload.text,
                    completed: false
                };
            case 'TOGGLE_TODO':
                if (state.id !== payload.id) {
                    return state;
                }

                return {
                    ...state,
                    completed: !state.completed
                };
            default:
                return state;

        }
    };

    const todos = (state = [], action) => {

        switch(action.type) {
            case 'ADD_TODO':
                return [
                    ...state,
                    todo(undefined, action)
                ];
            case 'TOGGLE_TODO':
                return state.map(t => todo(t, action));
            default:
                return state;
        }

    };

    const store = createStore(todos);

    store.dispatch(ADD_TODO_ACTION({ id: 1, text: 'ALEXANDER REDUX' }));
    store.dispatch(ADD_TODO_ACTION({ id: 2, text: 'dell' }));
    store.dispatch(ADD_TODO_ACTION({ id: 3, text: 'Macbook' }));

    console.log(store.getState());

    store.dispatch(TOGGLE_TODO_ACTION({ id: 1 }));

    console.log(store.getState());

};