// npm modules 
import { useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AllOutfits from './pages/AllOutfits/AllOutfits'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as outfitService from './services/outfitService'

// stylesheets
import './App.css'

// types
import { User, Profile, Outfit } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [outfits, setOutfits] = useState<Outfit[]>([])

  useEffect((): void => {
    const fetchOutfits = async (): Promise<void> => {
      try {
        const outfitData: Outfit[] = await outfitService.index()
        setOutfits(outfitData)
        
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchOutfits() : setOutfits([])
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }
 
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/outfits"
          element={
            <ProtectedRoute user={user}>
              <AllOutfits outfits={outfits}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
