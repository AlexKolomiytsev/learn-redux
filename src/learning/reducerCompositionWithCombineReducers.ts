import { createStore, combineReducers } from 'redux';

const ADD_TODO_ACTION = (payload) => ({ type: 'ADD_TODO', payload });
const TOGGLE_TODO_ACTION = (payload) => ({ type: 'TOGGLE_TODO', payload });
const SET_VISIBILITY_FILTER_ACTION = (payload) => ({ type: 'SET_VISIBILITY_FILTER', payload });

export const reducerCompositionWithCombineReducers = () => {

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

    const visibilityFilter = (state = 'SHOW_ALL', action) => {

        const { payload } = action;

        switch(action.type) {
            case 'SET_VISIBILITY_FILTER':
                return payload.filter;
            default:
                return state;
        }
    };

    // const todoApp = (state: any = {}, action) => {
    //     return {
    //         todos: todos(state.todos, action),
    //         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    //     }
    // };

    const todoApp = combineReducers({
        todos,
        visibilityFilter
    });

    const store = createStore(todoApp);

    store.dispatch(ADD_TODO_ACTION({ id: 1, text: 'ALEXANDER REDUX' }));
    store.dispatch(ADD_TODO_ACTION({ id: 2, text: 'dell' }));
    store.dispatch(ADD_TODO_ACTION({ id: 3, text: 'Macbook' }));

    console.log(store.getState());

    store.dispatch(SET_VISIBILITY_FILTER_ACTION({ filter: 'SHOW_COMPLETED' }));
    store.dispatch(TOGGLE_TODO_ACTION({ id: 1 }));

    console.log(store.getState());

};