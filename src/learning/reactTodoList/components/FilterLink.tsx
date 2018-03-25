import * as React from 'react';
import { connect } from 'react-redux';
import { SET_VISIBILITY_FILTER_ACTION } from '../actions';
import { Link } from './LInk';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(SET_VISIBILITY_FILTER_ACTION({ filter: ownProps.filter }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

