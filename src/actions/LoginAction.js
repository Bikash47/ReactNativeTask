// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :05/11/2019
// PURPOSE     : Action for both LoginComponent and Dashboard component
// ===============================
// Change History:
//
//==================================

import {
    EMAIL_CHANGE, PASSWORD_CHANGE,
    FETCHING_DATA, DASHBOARD_DATA
} from "../config/Config";

import { Alert } from 'react-native';
import {isValidCredentials, getDashboardData } from "../business/LoginBusiness";
import { Actions } from "react-native-router-flux";

export const emailChanged = (text) => {
    console.log('Email on action ' + text);
    return {
        type: EMAIL_CHANGE,
        payload: text
    };
}

export const passwordChange = (text) => {
    console.log('Password' + text);
    return {
        type: PASSWORD_CHANGE,
        payload: text
    };
}


export const onLogin = (email, password) => {

    return async (dispatch) => {
        dispatch({ type: FETCHING_DATA, payload: true });
        try {
            let isValidate = isValidCredentials(email, password);
            isValidate ? Actions.Dashboard() : Alert.alert("", "User Name or Password is incorrect")
            dispatch({ type: FETCHING_DATA, payload: false });

        } catch (e) {
            dispatch({ type: FETCHING_DATA, payload: false });

        }
    }

}



export const dashboardData = () => {
    return async (dispatch) => {
        dispatch({ type: FETCHING_DATA, payload: true });
        try {
          
            // console.log(" Response " + " " + data);
            dispatch({
                type: DASHBOARD_DATA,
                payload: getDashboardData()
            });
        } catch (e) {
            dispatch({ type: FETCHING_DATA, payload: false });

        }
    }
}




