import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li><a href='/Auth'>Auth</a></li>
        <li><a href='/Profile'>Profile</a></li>
        <li><a href='/Player'>Player</a></li>
        <li><a href='/Synth'>Synth</a></li>
      </ul>
    </div>
  )
}
