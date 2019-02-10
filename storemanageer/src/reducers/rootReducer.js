import {combineReducers} from "redux/es/redux";
import loginReducer from './loginReducer';

export default combineReducers({
 auth: loginReducer
});
