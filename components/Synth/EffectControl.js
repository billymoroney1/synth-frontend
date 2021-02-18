
import React, { useState, useEffect } from 'react'

export default function EffectControl(props) {

    const [active, setActive] = useState(props.status)
    const [name, setName] = useState(props.name)

    //CODE FOR ATTEMPTING TO USE A DROP DOWN MENU TO CHANGE WHICH CONTROL WAS VISIBLE
    // useEffect(() => {
    //     console.log(props.name, props.status)
    //     setName(props.name)
    //     setActive(props.status)
    // }, [props])
    
    //toggle effect on off
    const handleClick = (e) => {
        props.onOff(name)
        setActive(active ? false : true)
    }
    
    //toggles classes for style
    return (
        <div className={active ? 'on-effect' : 'off-effect'} onClick={handleClick}>
            <p>{name}</p>
        </div>
    )
}