import React, { useState, useEffect } from 'react'

//components
import EffectControl from './EffectControl'
import EffectParams from './EffectParams'
import Dropdown from './Dropdown'

export default function EffectPanel({effects, onOff}) {

    //keep track of which effect is selected
    const [current, setCurrent] = useState(effects[0])
    //keep track of current effects parameters
    

    //list of all effect names


    const handleEffectName = (e) => {
        for (let i = 0; i < effects.length; i++){
            if (effects[i].name === e.target.value){
                setCurrent({...effects[i]})
            }
        }
    }

    const options = []
    for (let i = 0; i < effects.length; i++){
        options.push(effects[i].name)
    }

    useEffect(() => {
        //update params state
    }, [current])

    return (

        <div>
            <Dropdown handleChange={handleEffectName} options={options} />
            <EffectControl onOff={onOff} name={current.name} status={current.status} />
            <EffectParams />
        </div>
    )
}