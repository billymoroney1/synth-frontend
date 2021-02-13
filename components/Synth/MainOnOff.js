import React, { useState } from 'react'
//icon import
import { Play } from 'heroicons-react'

import * as Tone from 'tone'

export default function MainOnOff() {

    //keep track of whether audio context is enabled or not
    const [enabled, setEnabled] = useState(false)

    //toggles audio context on, updates state
    const handleClick = async (e) => {
        if (!enabled) {
            await Tone.start()
            console.log('audio is ready')
        }
        return (enabled ? setEnabled(false) : setEnabled(true))
    }

    //toggles style based on state
    return (
        <div className={enabled ? "on-btn" : "off-btn"} onClick={handleClick}>
            <Play className='w-32 h-32' />
        </div>
    )
}