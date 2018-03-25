import { v4 } from 'uuid';

export const ADD_TODO_ACTION = (payload) => ( { type: 'ADD_TODO', payload: { ...payload, id: v4() } } );
export const TOGGLE_TODO_ACTION = (payload) => ( { type: 'TOGGLE_TODO', payload } );
// export const SET_VISIBILITY_FILTER_ACTION = (payload) => ( { type: 'SET_VISIBILITY_FILTER', payload } );
