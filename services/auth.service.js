import axios from 'axios';

//NEXT router
import { useRouter } from 'next/router'

import {setItem, getItem, removeItem} from '../utilities/localStorage.utilities'

const API_URL="http://synth-backend.herokuapp.com/api/auth/"
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

//get current user
export const getCurrentUser = () => {
    return getItem('user')
}