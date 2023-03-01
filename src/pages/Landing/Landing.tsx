// stylesheets
import styles from './Landing.module.css'

// types
import { User, Profile } from '../../types/models'
import { Profiler } from 'react';

interface LandingProps {
  user: User | null;
  
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user} = props

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {/* <img src={profile.photo} alt="" /> */}
    </main>
  )
}

export default Landing
