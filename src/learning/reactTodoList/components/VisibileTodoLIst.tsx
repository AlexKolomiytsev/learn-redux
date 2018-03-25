import * as React from 'react';
import { connect } from 'react-redux';

import { TOGGLE_TODO_ACTION } from '../actions';
import { getVisibleTodos } from '../helpers';
import { TodoList } from './TodoList';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    onClickTodo: (id) => dispatch(TOGGLE_TODO_ACTION({ id }))
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
