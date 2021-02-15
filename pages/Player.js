import React, { useState, useEffect } from 'react'

//services
import { getPresets } from '../services/preset.service'

//components
import Dropdown from '../components/Synth/Dropdown'

import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'



export default function Player() {

    const [presets, setPresets] = useState([])
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
        const effects = presets.effects
    }

    //make a new component, sequence, takes preset data. need to extract some logic from trigger component to reuse 
    //sequences component should also extract waveform data to manipulate canvas component?


    return (
        <Layout>
            <div className={styles.container}>
                Player
            </div>
            {!loading && (
                <Dropdown name='waveType' options={['sine', 'triangle', 'square', 'sawtooth']} />
            )}
        </Layout>
    )
}