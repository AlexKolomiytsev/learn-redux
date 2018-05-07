import * as React from 'react';
import { connect } from 'react-redux';

import { TOGGLE_TODO_ACTION } from '../actions';
import { getVisibleTodos } from '../helpers';
import { TodoList } from './TodoList';
import {withRouter} from 'react-router';

const mapStateToProps = (state, { match: { params } }) => ({
    todos: getVisibleTodos(state.todos, params.filter || 'all')
});

const mapDispatchToProps = (dispatch) => ({
    onClickTodo: (id) => dispatch(TOGGLE_TODO_ACTION({ id }))
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));

export default VisibleTodoList;
