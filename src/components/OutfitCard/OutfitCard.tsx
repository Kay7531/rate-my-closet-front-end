import { useState } from 'react'
import styles from './OutfitCard.module.css'

import {Outfit} from '../../types/models'
interface OutfitCardProps {
    outfit: Outfit
}

const OutfitCard = ({outfit}:OutfitCardProps): JSX.Element => {
    return(
        <>
        <div className={styles.container}>
        
        <img src={outfit.photo} alt="" />
        {outfit.description}
        </div>
        </>
    )
}
export default OutfitCard
