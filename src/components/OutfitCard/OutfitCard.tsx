import { useState } from 'react'
import styles from './OutfitCard.module.css'
import { useParams, Link } from "react-router-dom"

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
        <Link to = {`/outfits/${outfit.id}/edit`} state={{outfit}}> Edit </Link>
        </div>
        </>
    )
}
export default OutfitCard
