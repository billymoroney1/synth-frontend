import React, { useState, useRef } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import styles from '../styles/Home.module.css'

//NEXT router
import { useRouter } from 'next/router'

//component
import FormGroup from '../components/FormGroup'
import ButtonSpinner from '../components/ButtonSpinner'

import Layout from '../components/Layout'

//helper functions
import {login} from '../services/auth.service'
import { resMessage } from '../utilities/resMessage.utilities'

const required = (value) => {
    if(!value) {
        return (
            <div>
                This field is required!
            </div>
        )
    }
}



export default function Login(props) {
    //refs
    const form = useRef()
    const checkBtn = useRef()

    //router
    const router = useRouter()

    //state
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    //update states
    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
    }

    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        setMessage("")
        setLoading(true)
        //validate all fields
        form.current.validateAll()
        //validator stores errors and we can check if errors exist
        if (checkBtn.current.context._errors.length === 0) {
            login(username, password).then(
                () => {
                    router.push('/')
                },
                (error) => {
                    //set loading to false
                    setLoading(false)
                    //check errors
                    setMessage(resMessage(error))
                }
            )
        } else {
            setLoading(false)
        }
    }
    return (
        <div className='flex flex-col'>
            <div className='max-w-md w-full mx-auto my-auto mt-4 bg-white p-8 border border-gray-300'>
                <div className='text-3xl font-bold text-gray-900 text-center mb-8'>Sign In</div>
                <Form onSubmit ={handleLogin} ref={form} className='space-y-7'>
                    <FormGroup text="username">
                        <Input
                            className='w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500'
                            type='text'
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </FormGroup>
                    <FormGroup text="password">
                        <Input
                            className='w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500'
                            type='password'
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </FormGroup>

                    <ButtonSpinner text="Login" login={loading} />

                    {message && (
                        <div>
                            {message}
                        </div>
                    )}
                    <CheckButton style={{display: "none"}} ref={checkBtn} />
                    
                </Form>
                <p>Need an account? <a href='/Register'>Register.</a></p>
            </div>
        </div>
    )
}