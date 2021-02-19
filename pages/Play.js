import React, {useState, useEffect} from 'react'

import PitchControl from '../componenets/Play/PitchControl'
import Trigger from '../components/Play/Trigger'

import * as Tone from 'tone'

import { patch } from '../../logic/patch'


export default function Play(props) {

    const [pitch, setPitch] = useState(['A', '4'])

    useEffect(() => {
        Tone.start()
        patch(props.preset)
    }, [])

    return (
        <div>
            <PitchControl />
            <Trigger />
        </div>
    )
}