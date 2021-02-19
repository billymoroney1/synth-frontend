import React, { useState } from 'react'
import * as Tone from 'tone'

import { patch } from '../../logic/patch'

export default function Trigger(props) {

    //determines whether button is active (very brief just to show animation)
    const [active, setActive] = useState(false)

    //make button blink, then fire patch()
    const handleClick = (e) => {
        if (!active){
            setActive(true)
            setTimeout(() => {setActive(false)}, 200)
            patch(Tone, props.preset)
        }
    }

    

    return (
        //this just fires off a quick flash to indicate that the button was clicked
        <div className={active ? 'act-trig' : 'inac-trig'} onClick={handleClick}>
            
        </div>
    )
}