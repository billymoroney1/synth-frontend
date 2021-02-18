import React, { useState, useEffect } from 'react'

//challenge here is learning how to input decimals in react, finished product could be like ableton where you can either type in value or use slider

export default function Envelope(props) {

    const handleChange = (e) => {
        props.adsrChange(e.target.value, e.target.name)
    }

    const attack = props.env[0]
    const decay = props.env[1]
    const sustain = props.env[2]
    const release = props.env[3]

    return (
        <div className='flex flex-col'>
            <label htmlFor='attack'>attack</label>
            <input onChange={handleChange} type='range' value={attack} id='attack' name='attack' min='0' max='2' step='0.1' />
            <label htmlFor='decay'>decay</label>
            <input onChange={handleChange} type='range' value={decay} id='decay' name='decay' min='0' max='2' step='0.1' />
            <label htmlFor='sustain'>sustain</label>
            <input onChange={handleChange} type='range' value={sustain} id='sustain' name='sustain' min='0' max='1' step='0.1' />
            <label htmlFor='release'>release</label>
            <input onChange={handleChange} type='range' value={release} id='release' name='release' min='0' max='5' step='0.1' />
        </div>
    )
}