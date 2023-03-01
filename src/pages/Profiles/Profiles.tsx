// npm packages
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'


// types
import { Profile } from '../../types/models'

interface ProfilesProps {
	profile: Profile;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profile } = props
  

  // if(!profile.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        <p key={profile.id}>
          {profile.name}
          <img src={profile.photo} alt="" />
          </p> 
      )}
    </>
  )
}
 
export default Profiles
