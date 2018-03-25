export const visibilityFilter = (state = 'SHOW_ALL', action) => {

    const { payload } = action;

    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return payload.filter;
        default:
            return state;
    }
};
