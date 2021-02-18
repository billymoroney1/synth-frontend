import React, { useState } from 'react'
import Link from 'next/link'

//services
import { deletePreset } from '../../services/preset.service'

export default function Preset(props) {

    const [visible, setVisible] = useState(true)


    const handleDelete = () => {
        console.log('delete')
        setVisible(false)
        deletePreset(props.id)
    }

    return (
        <div>
        {visible && (
            <div>
                <div className='rounded overflow-hidden shadow-lg'>
                    <span>Name of preset: {props.name}</span><br/>
                    <Link href={`/Player/ ${props.id}`}>
                        <button><a>Play</a></button>
                    </Link>
                    <Link href={`/Synth/${props.id}`}>
                        <a>Edit</a>
                    </Link>
                    <form onSubmit={handleDelete}>
                        <button type='submit'>Delete</button>
                    </form>
                </div> 
            </div>
        )}
        </div>
    )
}