import React, { useState } from 'react'

export default function EffectControl(props) {

    //manage whether effect is enabled or not
    const [enabled, setEnabled] = useState(false)
    
    //toggle effect, add/remove from 'synth' in parent component
    const handleClick = (e) => {
        if (!enabled) {
            setEnabled(true)
            props.add(props.name)
        }
        else {
            setEnabled(false)
            props.remove(props.name)
        }
    }
    
    //toggles classes for style
    return (
        <div className={enabled ? 'on-effect' : 'off-effect'} onClick={handleClick}>
            <p>{props.name}</p>
        </div>
    )
}