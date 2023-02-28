import { useState } from 'react'
import styles from './OutfitCard.module.css'

import {Outfit} from '../../types/models'
interface OutfitCardProps {
    outfit: Outfit
    handleDeleteOutfit: (evt: React.MouseEvent, postId: number) => void;
}

const OutfitCard = (props:OutfitCardProps): JSX.Element => {
    const {outfit, handleDeleteOutfit} = props
    return(
        <>
        <div className={styles.container}>
        
        <img src={outfit.photo} alt="" />
        {outfit.description}
        <button onClick={(evt) => handleDeleteOutfit(evt, outfit.id)}>X</button>
        </div>
        </>
    )
}
export default OutfitCard
