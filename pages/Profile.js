import React, { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'

//services
import { getPresets } from '../services/preset.service'

//components
import Preset from '../components/Profile/Preset'
 



export default function Profile() {

    const [presets, setPresets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPresets().then((response) => {
            setPresets([...response.data])
            console.log(response.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const viewPresets = presets.map((p, key) => {
        return <Preset name={p.name} id={p._id} />
    })

    return (
        <Layout>
        {!loading && (
            <div className={styles.container}>
                Profile
                <ul>
                    {viewPresets}
                </ul>
            </div>
        )}
        </Layout>
    )
}