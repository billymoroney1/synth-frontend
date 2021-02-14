import React, { useState, useEffect } from 'react'
import MainOnOff from '../../components/Synth/MainOnOff'
import Trigger from '../../components/Synth/Trigger'
import EffectControl from '../../components/Synth/EffectControl'
import Dropdown from '../../components/Synth/Dropdown'
import Envelope from '../../components/Synth/Envelope'
import SavePreset from '../../components/Synth/SavePreset'

//nextjs router
import { useRouter } from 'next/router'

//preset service
import { getOnePreset } from '../../services/preset.service'

import Layout from '../../components/Layout'

export default function Synth(props) {

    const router = useRouter()
    const { pid } = router.query
    
    //if waiting for api response
    const [loading, setLoading] = useState(true)
    //manage this state to flip between create and edit UI
    const [edit, setEdit] = useState(false)
    //keep track of effects to be passed to the synth(trigger)
    const [synth, setSynth] = useState([])
    //keep track of waveform
    const [wave, setWave] = useState("sine")
    //keep track of filter type
    const [filter, setFilter] = useState("lowpass")
    //manage envelope
    const [envelope, setEnvelope] = useState([0.1, 0.2, 1.0, 0.8])
    //full preset state
    const [preset, setPreset] = useState([])

    //hook to query for single preset
    useEffect(async () => {
        //ping API for preset data if query param is something other than 0
        if(pid !== 0){
            await getOnePreset(pid).then((response) => {
                const data = response.data[0]
                console.log('DATA: ', data.options)
                console.log('LOADING: ', loading)
                setWave(data.options[0])
                setEnvelope(data.options[3])
                setFilter(data.options[1])
                setSynth(data.options[2])
                setLoading(false)
            }).catch((err) => {
                console.log(err)
            })
        }
        //need to set state
        setEdit(true)
        //how can i rerender?

        //also need to pass state to the buttons
    }, [])

    useEffect(() => {
        console.log(wave)
        setLoading(false)
    }, [wave])

    //use drop down menu to change waveform
    const optionSelect = (e) => {
        if (e.target.name === 'waveType'){
            setWave(e.target.value)
        } else if (e.target.name === 'filterType') {
            setFilter(e.target.value)
        }
    }

    //helper function to pass down into effects
    const effectAdd = (name) => {
        setSynth([...synth, name])
    }

    //helper function to pass down into effects
    const effectRemove = (name) => {
        let i = synth.indexOf(name)
        synth.splice(i, 1)
        setSynth([...synth])
    }

    //gather state to pass down into SavePreset component
    useEffect(() => {
        const fullPreset = []
        fullPreset.push(wave)
        fullPreset.push(filter)
        fullPreset.push(synth)
        fullPreset.push(envelope)
        setPreset([...fullPreset])
    }, [envelope, wave, filter, synth])

    //******** */
    //ENVELOPE HELPER FUNCTIONS
    /********** */

    const adsrChange = (val, name) => {
        //copy of state array
        let env = envelope
        if (name === 'attack'){
            env[0] = val
        } else if (name === 'decay'){
            env[1] = val
        } else if (name === 'sustain'){
            env[2] = val
        } else if (name === 'release'){
            env[3] = val
        }
        
        setEnvelope([...env])
    }

    return (
        <Layout>
        {!loading && (
            <div className='flex w-3/5 m-auto flex-col space-y-12'>
                <div className='h-42 flex justify-around content-center'>
                    <Trigger synth={synth} wave={wave} envelope={envelope} filter={filter} />
                    <Dropdown name='waveType' value={wave} options={['sine', 'triangle', 'square', 'sawtooth']} handleChange={optionSelect} />
                    <Envelope adsrChange={adsrChange} env={envelope} />
                    <MainOnOff />
                    {/* <Canvas /> */}
                </div>
                <div className='flex justify-around'>
                    <EffectControl name={'reverb'} add={effectAdd} remove={effectRemove} />
                    <EffectControl name={'filter'} add={effectAdd} remove={effectRemove} />
                    <Dropdown name='filterType' value={filter} options={['lowpass', 'highpass']} handleChange={optionSelect} />
                    <EffectControl name={'phaser'} add={effectAdd} remove={effectRemove} />
                    <EffectControl name={'delay'} add={effectAdd} remove={effectRemove} />
                </div>
                <SavePreset preset={preset} />
            </div>
        )}
        </Layout>
    )
}