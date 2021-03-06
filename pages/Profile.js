import React, { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'

//services
import { getPresets } from '../services/preset.service'

//components
import Preset from '../components/Profile/Preset'

import { getCurrentUser } from '../services/auth.service'

import { useRouter } from 'next/router'


export default function Profile() {

    const [presets, setPresets] = useState([])
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        const user = getCurrentUser()
        if (!user){
            router.push('/Login')
        } else {
            getPresets().then((response) => {
                setPresets([...response.data.presets])
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [])

    const viewPresets = presets.map((p, key) => {
        return <div className='text-center'> <Preset name={p.name} id={p._id} /></div>
    })

    return (
        <Layout>
        {loading && (
            <div className='flex h-screen justify-center items-center'>
                <div className='m-auto'>
                    <div className='animate-spin w-36 h-36 border-8 border-black'></div>
                </div>
            </div>
        )}
        {!loading && (
            <div>
                <div className='text-center mt-12 mb-12 text-4xl bg-gray-300'>
                   Presets 
                </div>
                <div className='grid grid-flow-row grid-cols-3 auto-rows-auto justify-items-center'>
                    {viewPresets}
                </div>
            </div>
        )}
        </Layout>
    )
}