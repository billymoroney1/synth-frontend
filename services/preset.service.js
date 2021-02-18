import axios from 'axios'

const API_URL='http://synth-backend.herokuapp.com/api/presets/'

import {setItem, getItem, removeItem} from '../utilities/localStorage.utilities'

//POST - create preset
export const createPreset = (name, options) => {
    const id = getItem('user').id
    return axios
    .post(API_URL+"preset", {
        name,
        options,
        id
    })
}

//PUT - editing a preset
export const editPreset = (id, name, options) => {
    return axios
    .put(API_URL+'preset', {
        id,
        name,
        options
    })
}

//DELETE - delete a preset
export const deletePreset = (id) => {
    return axios
    .delete(API_URL+"preset", {
        data: {
            _id: id
        }
    })

}

//GET - get all presets
export const getPresets = () => {
    const id = getItem('user').id
    return axios
    .get(API_URL+'all/' + id)
}

//GET - single preset
export const getOnePreset = (id) => {
    return axios
    .get(API_URL+id)
}

