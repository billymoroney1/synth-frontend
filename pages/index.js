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
    <div className='flex flex-col space-y-12 m-12 text-center'>
        <div>
          View your profile to see your saved presets!
        </div>
        <div>
          Go to the synth page to make new sounds!
        </div>
    </div>
        
    </Layout>
  )
}
