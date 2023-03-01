import { Link } from 'react-router-dom';
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
      <div className={styles.about}>
      <h1>Where style enthusiasts gather to show off and get opinions on their fits. </h1>
      <h2>Get started here</h2>
      <Link to= "/signup"><button style={{width:200, height:50, fontSize:20}}>Rate My Closet</button></Link>
      </div>
     <img style= {{width:550, height:550}}src="public/lfash-anding.png" alt="" />
    </main>
  )
}

export default Landing
