import React, { useState } from 'react'

//helper functions
import { editPreset } from '../../services/preset.service'


export default function EditPreset(props) {

    const [name, setName] = useState(props.name)
    const [message, setMessage] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    //need to gather state from Synth.js component
    const handleSubmit = (e) => {
        e.preventDefault()
        editPreset(props.id, name, props.preset).then(
            (response) => {
                setMessage(response.data.message)
            }
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for='name'>Name</label>
                <input type='text' id='name' name='name' value={name} onChange={onChangeName} />
                <input type='submit' value="Save Changes" />
            </form>

            {message && (
                        <div>
                            {message}
                        </div>
                    )}
        </div>
    )
}