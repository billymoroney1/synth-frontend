import React, { useState, useRef } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'

//NEXT router
import { useRouter } from 'next/router'

//component
import FormGroup from '../components/FormGroup'
import ButtonSpinner from '../components/ButtonSpinner'

//helper functions
import { register } from '../services/auth.service'
import { resMessage } from '../utilities/resMessage.utilities'
import { login } from '../services/auth.service'

import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

//function given to react-validation
const required = (value) => {
    if(!value) {
        return (
            <div>
                This field is required!
            </div>
        )
    }
}

//validates username
const vusername = (value) => {
    if (value.length <= 3 || value.length >= 20) {
        return (
            <div>
                The username must be between 3 and 20 characters
            </div>
        )
    }
}

//validates password
const vpassword = (value) => {
    if(value.length < 6 || value.length >= 40) {
        return (
            <div>
                The password must be between 6 and 40 characters
            </div>
        )
    }
}

//function validates email
const vemail = (value) => {
    if(!isEmail(value)){
        return(
            <div>
                This is not a valid email
            </div>
        )
    }
}



export default function Register(props) {
    const form = useRef()
    const checkBtn = useRef()
    const router = useRouter()

    //state
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [successful, setSuccessful] = useState(false)
    const [message, setMessage] = useState("")

    //update state helper functions
    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
    }

    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    }

    const onChangeEmail = (e) => {
        const email = e.target.value
        console.log(email)
        setEmail(email)
    }

    //submit helper function
    const handleRegister = (e) => {
        e.preventDefault()
        
        //validate all fields
        form.current.validateAll()

        //validator stores errors, check to see if errors exist
        if(checkBtn.current.context._errors.length === 0){
            register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message)
                    setSuccessful(true)

                    //login the new user 
                    login(username, password).then(
                        router.push('/Profile')
                    )
                },
                (error) => {
                    setMessage(resMessage(error))
                    setSuccessful(false)
                }
            )
        }
    }

    return (
        <Layout>
            <div className={styles.container}>
                <Form onSubmit={handleRegister} ref={form}>
                    <FormGroup text="username">
                        <Input
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required, vusername]}
                        />
                    </FormGroup>
                    <FormGroup text="email">
                        <Input
                            type="text"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required, vemail]}
                        />
                    </FormGroup>
                    <FormGroup text="password">
                        <Input
                            type="text"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required, vpassword]}
                        />
                    </FormGroup>

                    <ButtonSpinner text="Register" />

                    {message && (
                        <div>
                            {message}
                        </div>
                    )}

                    <CheckButton style={{ display: 'none'}} ref={checkBtn} />
                </Form>
            </div>
        </Layout>
    )
}