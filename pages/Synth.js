import React, { useState, useEffect } from 'react'
import MainOnOff from '../components/Synth/MainOnOff'
import Trigger from '../components/Synth/Trigger'
import EffectControl from '../components/Synth/EffectControl'
import Dropdown from '../components/Synth/Dropdown'
import Envelope from '../components/Synth/Envelope'

import Layout from '../components/Layout'

export default function Synth(props) {

    //keep track of effects to be passed to the synth(trigger)
    const [synth, setSynth] = useState([])
    //keep track of waveform
    const [wave, setWave] = useState("sine")
    //keep track of filter type
    const [filter, setFilter] = useState("lowpass")
    //manage envelope
    const [envelope, setEnvelope] = useState([0.1, 0.2, 1.0, 0.8])

    //use drop down menu to change waveform
    const optionSelect = (e) => {
        if (e.target.name === 'waveType'){
            setWave(e.target.value)
        } else if (e.target.name === 'filterType') {
            setFilter(e.target.value)
        }
        console.log(e.target.value)
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

    //trigger rerender on envelope state change
    useEffect(() => {
        // console.log(envelope)
    }, [envelope])

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
            <div className='flex w-3/5 m-auto flex-col space-y-12'>
                <div className='h-42 flex justify-around content-center'>
                    <Trigger synth={synth} wave={wave} envelope={envelope} filter={filter} />
                    <Dropdown name='waveType' options={['sine', 'triangle', 'square', 'sawtooth']} handleChange={optionSelect} />
                    <Envelope adsrChange={adsrChange} env={envelope} />
                    <MainOnOff />
                    {/* <Canvas /> */}
                </div>
                <div className='flex justify-around'>
                    <EffectControl name={'reverb'} add={effectAdd} remove={effectRemove} />
                    <EffectControl name={'filter'} add={effectAdd} remove={effectRemove} />
                    <Dropdown name='filterType' options={['lowpass', 'highpass']} handleChange={optionSelect} />
                    <EffectControl name={'phaser'} add={effectAdd} remove={effectRemove} />
                    <EffectControl name={'delay'} add={effectAdd} remove={effectRemove} />
                </div>
            </div>
        </Layout>
    )
}
