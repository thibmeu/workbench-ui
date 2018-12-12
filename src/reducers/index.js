import {combineReducers} from "redux";
import userSettings from './user-settings';
import pages from './pages';

export default combineReducers({
    userSettings,
    pages
});