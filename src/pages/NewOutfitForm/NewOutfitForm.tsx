import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import styles from './NewOutfitForm.module.css'
//Services
import * as outfitService from '../../services/outfitService'
//Types
import { NewOutfitFormData, PhotoFormData, NewOutfitFormElements } from "../../types/forms"

interface NewOutfitFormProps {
    NewOutfitFormData: NewOutfitFormData
}

const NewOutfitForm = (props: NewOutfitFormData): JSX.Element => {
const [form, setForm] = useState()
const [photoData, setPhotoData] = useState({})
const handleChange = ({}) => {

}
const handleSubmit = () => {

}

const handleChangePhoto = () => {
    
}
    return (
        <main>
            {/* <form onSubmit={{ handleSubmit }}
           <label htmlFor="text-input"></label>
            <input
                required
                type="text"
                name="description"
                id="description-input"
                value={form.description}
                placeholder="Location"
                onChange={handleChange}
            />
        </form> */}
        </main >
    )
}

export default NewOutfitForm