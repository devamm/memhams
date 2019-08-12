import axios from 'axios';

// Action Types
const GET_USER = 'GET_USER';
const CREATE_USER = 'CREATE_USER';
const REMOVE_USER = 'GET_USER';

// Action Creators
const getUser = user => ({type: GET_USER, user});
const createUser = user => ({type: CREATE_USER, user});
const removeUser = user => ({type: REMOVE_USER, user});

//Thunk Creators
export const fetchUser = (id) => async dispatch => {
    //ajax call goes here

    dispatch(getUser());
}

export const createUserRequest = (newUser) => async dispatch => {
    //ajax call goes here

    dispatch(createUser());
}

export const userLogout = () => async dispatch => {
    //ajax call goes here

    dispatch(removeUser());
}


// Reducer
export default function(state = {}, action){
    switch(action.type){
        case GET_USER:
            return action.user;
        case CREATE_USER:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
        return state;
    }
}