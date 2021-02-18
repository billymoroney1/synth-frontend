import React, { useState, useEffect } from 'react'
import { getCurrentUser } from '../services/auth.service'
import Link from 'next/link'
import { removeItem } from '../utilities/localStorage.utilities'

//NEXT router
import { useRouter } from 'next/router'


export default function Layout(props) {

    const router = useRouter()

    //logout
    const logout = () => {
        removeItem('user')
        router.push('/Login')
    }

    return (
        <div>
            <nav className='flex w-full shadow justify-center'>
                <ul className='flex justify-center w-full space-x-12'>
                    <li>
                        <button className='hover:border-opacity-100 border-b-4 border-opacity-0 border-blue-300 p-3'>
                            <Link href='/'>
                                <a className='hover:text-blue-700'>Home</a>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className='hover:border-opacity-100 border-b-4 border-opacity-0 border-blue-300 p-3'>
                            <Link href='/Profile'>
                                <a className='hover:text-blue-700'>Profile</a>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className='hover:border-opacity-100 border-b-4 border-opacity-0 border-blue-300 p-3'>
                            <Link href='/Synth/0'>
                                <a className='hover:text-blue-700'>Synth</a>
                            </Link>
                        </button>
                    </li>
                    <li className='hover:border-opacity-100 border-b-4 border-opacity-0 border-red-500 p-3'>
                        <button>
                            <a className='hover:text-red-700' onClick={logout}>Logout</a>
                        </button>
                    </li>
                </ul>
            </nav>
            <div>{props.children}</div>
        </div>
    )
}