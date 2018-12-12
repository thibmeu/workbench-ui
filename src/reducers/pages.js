import {ACTIONS} from '../actions';

const pages = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_PAGES:
            return [...action.pages];
        default:
            return state;
    }
};

export default pages;