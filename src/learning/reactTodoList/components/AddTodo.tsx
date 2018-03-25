import * as React from 'react';
import { connect } from 'react-redux';

import { ADD_TODO_ACTION } from '../actions';

const AddTodo = ({ dispatch }) => {
    let input;

    return <div>
        <input type='text' ref={ (node) => input = node } />
        <button onClick={ () => {
            dispatch(ADD_TODO_ACTION({
                text: input.value,
            }));

            input.value = '';
        } }>
            Add TODO
        </button>
    </div>
};

export default connect()(AddTodo);

