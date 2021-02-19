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
        <>
        {visible && (
            <div className='border border w-64 h-64 m-12 rounded bg-blue-100 overflow-hidden shadow-lg'>
                <div>
                    <span>{props.name}</span><br/>
                    <Link href={`/Synth/${props.id}`}>
                        <button className='inline-block px-8 py-2 mb-4 mt-8 ml-18 text-xs font-medium leading-6 center text-center text-white uppercase transition bg-blue-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none'><a>Edit</a></button>
                    </Link>
                    <form onSubmit={handleDelete}>
                        <button className='inline-block px-6 py-2 text-xs ml-18 font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none'type='submit'>Delete</button>
                    </form>
                </div>
            </div>  
        )}
        </>
    )
}