import React, { useState, useEffect } from 'react'
import { getCurrentUser, logout} from '../services/auth.service'
import Link from 'next/link'


export default function Layout(props) {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        const user = getCurrentUser()

        if (user) {
            setCurrentUser(user)
        }
    }, [])

    return (
        <div>
            <nav>
                <ul>
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
                            <Link href='/Player'>
                                <a>Player</a>
                            </Link>
                        </li>
                    )}
                    {currentUser && (
                        <li>
                            <Link href='/Synth'>
                                <a>Synth</a>
                            </Link>
                        </li>
                    )}
                    {currentUser ? (
                        <li>
                            <a onClick={logout}>Logout</a>
                        </li>
                    ) : (
                        <div>
                        <li>
                            <Link href='/Login'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href='Register'>
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