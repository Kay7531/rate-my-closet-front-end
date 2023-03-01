import { useState } from 'react'
import styles from './OutfitCard.module.css'
import { useParams, Link } from "react-router-dom"

import {Outfit,Profile, User} from '../../types/models'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faCancel} from '@fortawesome/free-solid-svg-icons'



interface OutfitCardProps {
    outfit: Outfit;
    handleDeleteOutfit: (evt: React.MouseEvent, postId: number) => void;
   
}

const OutfitCard = (props:OutfitCardProps): JSX.Element => {
    const {outfit, handleDeleteOutfit} = props
    return(
        <>
        <div className={styles.container}>
        
        <img style={{objectFit:"cover"}}id="outfit" src={outfit.photo} alt="" />
        <section className={styles.author}>
            <div id='poster'>
            <img style={{width:50, height:50, objectFit:"cover"}}src="/final-profile icon _prev_ui.png" alt="" />
            </div>
        <p style={{width:300}}>{outfit.description}</p>
        <div id="actions">
        <button style={{backgroundColor: 'gray', borderRadius:50, height:25}}onClick={(evt) => handleDeleteOutfit(evt, outfit.id)}> <FontAwesomeIcon icon={faCancel} /></button>
        <Link style={{textDecoration:'none', color: 'grey', fontSize:20}} to = {`/outfits/${outfit.id}/edit`} state={{outfit}}> <FontAwesomeIcon icon={faEdit} /></Link>
        </div>
        </section>
        </div>
        
        </>
    )
}
export default OutfitCard
