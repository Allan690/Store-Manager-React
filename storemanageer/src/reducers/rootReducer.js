import {combineReducers} from "redux/es/redux";
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer'

export default combineReducers({
 auth: loginReducer,
 new_user: signUpReducer
});
