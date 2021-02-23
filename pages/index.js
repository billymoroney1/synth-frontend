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
    <div style= {{ 
        borderTop: '2px solid blue',
        backgroundColor: 'black',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
      >
      </div>        
      <div style={{color: 'white', fontSize: '2vw', marginTop: '-43vw', textAlign: 'center', fontFamily: 'Ariel', fontWeight: '100',}}>
          <p style={{fontFamily: 'sans-serif'}}>Welcome to Synth</p>
      </div>
      <div style= {{
          backgroundImage: 'url(https://i.pinimg.com/originals/56/78/e6/5678e613f65dcb80ea0f441bb392f45d.gif)',
          backgroundPosition: 'center',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          height: '70vh',
          width: '100vh',
          marginLeft: '25vw',
        }}
        >
      </div>       
    </Layout>
  )
}
