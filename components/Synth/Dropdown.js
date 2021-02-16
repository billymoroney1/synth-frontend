import React, {useState} from 'react'

export default function WaveSelect(props) {

    const list = props.options.map((option, key) => {
            return <option key={key} value={option}>{option}</option>
        })

    return (
        // <div>
        //     <select onChange={props.handleChange}>
        //         <option value='sine'>sine</option>
        //         <option value='triangle'>triangle</option>
        //         <option value='square'>square</option>
        //         <option value='sawtooth'>sawtooth</option>
        //     </select>
        // </div>

        <div>
            <select name={props.name} value={props.value} onChange={props.handleChange}>
                {list}
            </select>
        </div>

    )
}