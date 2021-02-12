import axios from 'axios';

import {setItem, getItem, removeItem} from '../utilities/localStorage.utilities'

const API_URL="http://localhost:8080/api/auth/"
//register User
export const register =(username, email, password) => {
    return axios
    .post(API_URL+"register", {
        username,
        email,
        password
    })
}

//Login
export const login = (username, password) => {
    return axios
    .post(API_URL+"signin", {
        username,
        password
    })
    .then((response)=>{
        //Check if the response of user has accessToken
        if(response.data.accessToken){
            setItem('user', response.data)
        }
        return response.data
    })
}

//logout
export const logout = () => {
    removeItem('user')
    console.log('user logged out')
    //need to redirect to home3? or rely on authentication to take user back to login screen
}

//get current user
export const getCurrentUser = () => {
    return getItem('user')
}