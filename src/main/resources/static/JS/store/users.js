import axios from 'axios';
import history from '../history';

// Action Types
const GET_USER = 'GET_USER';
const CREATE_USER = 'CREATE_USER';
const REMOVE_USER = 'GET_USER';

// Action Creators
const getUser = user => ({type: GET_USER, user});
const removeUser = user => ({type: REMOVE_USER, user});

//Thunk Creators
export const auth = (usename, password, method) => async dispatch => {
    //ajax call goes here
    
    //dummy data for test purposes
    const dev = {id: 1, username: 'dev', isAdmin: true}

    dispatch(getUser(dev));

}

export const logout = () => async dispatch => {
    //ajax call goes here

    dispatch(removeUser());
}


// Reducer
export default function(state = {}, action){
    switch(action.type){
        case GET_USER:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}