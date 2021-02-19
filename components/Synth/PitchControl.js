import React, { useState, useEffect } from 'react'

export default function PitchControl(props){

    const [pitch, setPitch] = useState([])

    useEffect(() => {
        setPitch(props.pitch)
    }, [props])

    return (
        <div>
            <select onChange={props.handleChange} name='note' id='note' value={pitch[0]}>
                <option value='C'>C</option>
                <option value='C#'>C#</option>
                <option value='D'>D</option>
                <option value='D#'>D#</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
                <option value='F#'>F#</option>
                <option value='G'>G</option>
                <option value='G#'>G#</option>
                <option value='A'>A</option>
                <option value='A#'>A#</option>
                <option value='B'>B</option>
            </select>
            <select onChange={props.handleChange} name='octave' id='octave' value={pitch[1]}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
        </div>
    )
}