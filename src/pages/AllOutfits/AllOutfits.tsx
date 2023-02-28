// types
import { Outfit } from '../../types/models'

interface OutfitsProps {
	outfits: Outfit[];
}

const AllOutfits = (props: OutfitsProps): JSX.Element => {
  const { outfits } = props

  if(!outfits.length) return <p>No outfits yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the Outfits.</h1>
      {outfits.map((outfit: Outfit) =>
        <p key={outfit.id}>
        {outfit.description}
        <img src={outfit.photo} alt="" />
        </p>
        
        
      )}
    </>
  )
}
 
export default AllOutfits