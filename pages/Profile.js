import React, { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'

//services
import { getPresets } from '../services/preset.service'



export default function Profile() {

    const [presets, setPresets] = useState([])

    useEffect(() => {
        getPresets().then((response) => {
            setPresets(response.data)
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const viewPresets = presets.map((p, key) => {
        return <li key={key}>{p.name}</li>
    })

    return (
        <Layout>
            <div className={styles.container}>
                Profile
                <ul>
                    {viewPresets}
                </ul>
            </div>
            
        </Layout>
    )
}