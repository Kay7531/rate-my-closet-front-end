// npm modules
import { NavLink,Link} from 'react-router-dom'
import styles from './NavBar.module.css'
// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      <div className={styles.logo} style={{display:"flex", flexDirection:"row", justifyContent:'space-between', gap: 40}}>
        <Link to="/"><img style={{width: 100, height:100, objectFit:"cover"}}src="/assets/rate-closet-logo.png" alt="" /></Link>
       
      </div>
      {user ?
        <ul className={styles.container}>
           {/* <p style={{marginTop:30, fontSize:20 }}>Welcome, {user.name} </p> */}
          
          <NavLink style={{textDecoration: 'none', color: 'black'}} to="/outfits"> OUTFITS </NavLink>
          <NavLink style={{textDecoration: 'none', color: 'black'}} to="/outfits/new">POST</NavLink>
          {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
          {/* <NavLink style={{textDecoration: 'none', color: 'black'}} to="/change-password">Change password</NavLink> */}
          <NavLink style={{textDecoration: 'none', color: 'black'}} to="" onClick={handleLogout}>LOG OUT</NavLink>
          
          </ul>
        
        
      :
        <ul >
          <NavLink style={{textDecoration: 'none', color: 'black'}} to="/login">Log In</NavLink>
          <NavLink style={{textDecoration: 'none', color: 'black'}} to="/signup">Sign Up</NavLink>
        </ul>
        
      }
    </nav>
  )
}

export default NavBar
