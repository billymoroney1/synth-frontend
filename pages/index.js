import React, {useEffect} from 'react'

import Layout from '../components/Layout'

//nextjs router
import { useRouter } from 'next/router'
import { getCurrentUser } from '../services/auth.service'

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const user = getCurrentUser()
    if(!user){
      router.push('/Login')
    }
  }, [])

  return (
    <Layout>
        <div className='text-center'>
          About
        </div>
    </Layout>
  )
}
