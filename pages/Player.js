import React, { useState, useEffect } from 'react'

//services
import { getPresets } from '../services/preset.service'

//components
import Dropdown from '../components/Synth/Dropdown'
//using this to test before implementing sequence
import Trigger from '../components/Synth/Trigger'

import Layout from '../components/Layout'



export default function Player() {

    const [presets, setPresets] = useState([])
    //current selected preset in menu
    const [current, setCurrent] = useState()
    //preset names
    const [options, setOptions] = useState([])
    const [loading, setLoading] = useState(true)

    //need to get all presets, populate a dropdown menu with names

    useEffect(() => {
        getPresets().then((response) => {
            setPresets(response.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const popNames = () => {
        const names = []
        for (let i = 0; i < presets.length; i++){
            names.push(presets[i].name)
        }
        setOptions(names)
    }

    useEffect(() => {
        console.log('PRESETS: ', presets)
        popNames()
    }, [presets])

    const onChangeCurrent = (e) => {
        //find matching preset and set to current state
        console.log('DROP DOWN VALUE: ', e.target.value)
        for (let i = 0; i < presets.length; i++){
            if (presets[i].name === e.target.value){
                setCurrent(presets[i])
            }
        }
    }

    const handleClick = () => {
        console.log(current)
    }


    return (
        <Layout>
            {!loading && (
                <div>
                    <Dropdown name='waveType' handleChange={onChangeCurrent} options={options} />
                    <button onClick={handleClick}>See Preset</button> 
                </div>
            )}
        </Layout>
    )
}