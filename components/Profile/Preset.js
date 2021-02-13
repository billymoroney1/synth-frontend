import React from 'react'
import Link from 'next/link'

//services
import { deletePreset } from '../../services/preset.service'

export default function Preset(props) {

    const editPreset = () => {
        console.log('edit')
    }

    const handleDelete = () => {
        console.log('delete')
        deletePreset(props.id)
    }

    const details = props.details.map((d, key) => {
        return <li key={key}>{d}</li>
    })

    return (
        <div>
            <span>{props.name}</span>
            {details}
            <div onClick={editPreset}>Edit</div>
            <form onSubmit={handleDelete}>
                <button type='submit'>Delete</button>
            </form>
        </div>
    )
}