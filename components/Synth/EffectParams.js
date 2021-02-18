import React from 'react'

//WOULD USE THIS COMPONENT TO ABSTRACT THE ABILITY TO CREATE SLIDER MENUS TO MANAGE AN EFFECT'S STATE, THE DETAILS OF PARSING AND DISTRIBUTING ALL THAT DATA GOT TOO COMPLICATED FOR MVP
export default function EffectParams(props){

    //params is in array of objects: [{name: , value:  min: , max: , step:} ... ]
    const [params, setParams] = useState(props.params)

    const handleChange = (e) => {
        props.changeEffectValue(e.target.value, e.target.name)
    }
    
    const sliders = params.map((p, key) => {
        return <div><label htmlFor={p.name}>{p.name}</label><input onChange={handleChange} name={p.name} type='range' min={p.min} max={p.max} step={p.step} value={p.value}></input></div>
    })

    return(
        <div>
            {sliders}
        </div>
    )
}