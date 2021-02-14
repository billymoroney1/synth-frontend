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

    const details = props.details.map((d, key) => {
        return <li key={key}>{d}</li>
    })

    return (
        <div>
        {visible && (
            <div>
                <span>{props.name}</span>
                {details}
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