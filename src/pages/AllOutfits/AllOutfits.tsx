import * as outfitService from '../../services/outfitService'
//Components
import OutfitCard from '../../components/OutfitCard/OutfitCard';
import styles from './AllOutfits.module.css'

// types
import { Outfit } from '../../types/models'

interface OutfitsProps {
  outfits: Outfit[];
  handleDeleteOutfit: (evt: React.MouseEvent, outfitId:number)=> void;
  
}

const AllOutfits = (props: OutfitsProps): JSX.Element => {
  const { outfits, handleDeleteOutfit} = props

  if (!outfits.length) return <p>No outfits yet</p>

  // const handleDeleteOutfit = async (evt: React.MouseEvent, outfitId: number): Promise<void> => {
  //   evt.preventDefault()
  //   try {
  //     await outfitService.deleteOutfit(outfitId)
      
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  return (
    <>
    <div className= {styles.container}>
      
      {outfits.map((outfit: Outfit) =>
      (<OutfitCard
        key={outfit.id}
        outfit={outfit} 
        handleDeleteOutfit ={handleDeleteOutfit}
        />
       


      ))}
       </div>
    </>
  )
}

export default AllOutfits