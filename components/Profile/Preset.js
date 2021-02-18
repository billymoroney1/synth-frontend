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
        <div className='border border-black w-64 h-64 m-12'>
        {visible && (
            <div>
                <span>{props.name}</span>
                <Link href={`/Player/${props.id}`}>
                    <a>Play</a>
                </Link>
                <Link href={`/Synth/${props.id}`}>
                    <a>Edit</a>
                </Link>
                <form onSubmit={handleDelete}>
                    <button type='submit'>Delete</button>
                </form>
            </div>
        )}
        </div>
    )
}