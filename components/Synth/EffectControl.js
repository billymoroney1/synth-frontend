
import React, { useState, useEffect } from 'react'

export default function EffectControl(props) {

    const [active, setActive] = useState(props.status)
    const [name, setName] = useState(props.name)

    useEffect(() => {
        setActive(props.status)
        setName(props.name)
    }, [props])
    
    //toggle effect on off
    const handleClick = (e) => {
        props.onOff(props.name)
    }
    
    //toggles classes for style
    return (
        <div className={active ? 'on-effect' : 'off-effect'} onClick={handleClick}>
            <p>{name}</p>
        </div>
    )
}