import axios from 'axios'

const API_URL='http://synth-backend.herokuapp.com/api/presets/'

import {setItem, getItem, removeItem} from '../utilities/localStorage.utilities'

//create preset
export const createPreset = (name, options) => {
    return axios
    .post(API_URL+"preset", {
        name,
        options
    })
}

//POST - create a new prese

//PUT - editing a preset

//DELETE - delete a preset

//GET - get all presets
export const getPresets = () => {
    return axios
    .get(API_URL+"all")
}

