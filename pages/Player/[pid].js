import React, { useState, useEffect } from 'react'

//services
import { getOnePreset } from '../../services/preset.service'

//nextjs router
import { useRouter } from 'next/router'

//components
// import Dropdown from '../components/Synth/Dropdown'


//using this to test before implementing sequence
import Trigger from '../../components/Synth/Trigger'

import Layout from '../../components/Layout'

import * as Tone from 'tone'

const patch = require('../../logic/patch')



export default function Player(props) {

    const router = useRouter()
    const { pid } = router.query

    const [preset, setPreset] = useState([])
    const [loading, setLoading] = useState(true)

    //get preset referenced by the prop
    useEffect(() => {
        getOnePreset(pid).then((response) => {
            setPreset(response.data[0])
            setLoading(false)
        })
    }, [])

    const play = (e) => {
        console.log('id: ', e.target.id)
        patch.patch(Tone, preset, e.target.id)
        Tone.Transport.start()
    }

    // const on = () => {
    //     Tone.Transport.start()
    // }

    // const off = () => {
    //     Tone.Transport.stop()
    //     context.close()
    // }

    return (
        <Layout>
            {!loading && (
                <div>
                    {/* <div>
                        <button onClick={play}>Play</button>
                    </div> */}
                    <div id='1' onClick={play}>1</div>
                    <div id='2' onClick={play}>2</div>
                    <div id='3' onClick={play}>3</div>
                    <div id='4' onClick={play}>4</div>
                </div>
            )}
        </Layout>
    )
}

//CODE TO GET ALL PRESETS AND POPULATE A DROPDOWN MENU

    // useEffect(() => {
    //     getPresets().then((response) => {
    //         setPresets(response.data)
    //         setLoading(false)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])

    // const popNames = () => {
    //     const names = []
    //     for (let i = 0; i < presets.length; i++){
    //         names.push(presets[i].name)
    //     }
    //     setOptions(names)
    // }

    // useEffect(() => {
    //     console.log('PRESETS: ', presets)
    //     setCurrent(presets[0])
    //     popNames()
    // }, [presets])

    // const onChangeCurrent = (e) => {
    //     //find matching preset and set to current state
    //     console.log('DROP DOWN VALUE: ', e.target.value)
    //     for (let i = 0; i < presets.length; i++){
    //         if (presets[i].name === e.target.value){
    //             setCurrent(presets[i])
    //         }
    //     }
    //     const seq = sequence
    //     patch.patch(Tone, current, seq)
    // }