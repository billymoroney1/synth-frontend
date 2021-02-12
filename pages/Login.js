import React, { useState, useRef } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import styles from '../styles/Home.module.css'

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
                    console.log('redirect in nextjs')

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
        <Layout>
            <div className={styles.container}>
                <Form onSubmit ={handleLogin} ref={form}>
                    <FormGroup text="username">
                        <Input
                            type='text'
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </FormGroup>
                    <FormGroup text="password">
                        <Input
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
            </div>
        </Layout>
    )
}