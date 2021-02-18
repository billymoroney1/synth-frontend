import React, { useState, useEffect } from 'react'
import { getCurrentUser } from '../services/auth.service'
import Link from 'next/link'
import { removeItem } from '../utilities/localStorage.utilities'

//NEXT router
import { useRouter } from 'next/router'


export default function Layout(props) {
    const [currentUser, setCurrentUser] = useState(undefined)
    const router = useRouter()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const user = getCurrentUser()

        if (user) {
            setCurrentUser(user)
        }
    }, [])

    useEffect(() => {
        setLoading(false)
    }, [currentUser])

    //logout
    const logout = () => {
        removeItem('user')
        router.push('/Login')
    }

    return (
        <div>
            <nav className='flex w-full bg-gray-600'>
                <ul className='flex w-full space-x-12 object-right m-6'>
                    <li>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    {currentUser && (
                        <li>
                            <Link href='/Profile'>
                                <a>Profile</a>
                            </Link>
                        </li>
                    )}
                    {currentUser && (
                        <li>
                            <Link href='/Synth/0'>
                                <a>Synth</a>
                            </Link>
                        </li>
                    )}
                    {currentUser ? (
                        <li>
                            <a onClick={logout}>Logout</a>
                        </li>
                    ) : (
                        <div className='flex'>
                            <li>
                                <Link href='/Login'>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href='/Register'>
                                    Register
                                </Link>
                            </li>
                        </div>
                    )}
                </ul>
            </nav>
            <div>{props.children}</div>
        </div>
    )
}