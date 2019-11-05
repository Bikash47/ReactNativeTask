// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :05/11/2019
// PURPOSE     : Combine the reducer
// ===============================
// Change History:
//
//==================================

import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
export default combineReducers({
    //  coool: () =>[]
    auth: LoginReducers
});