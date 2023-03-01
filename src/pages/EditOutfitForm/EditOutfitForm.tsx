import { useState } from "react"
import { useLocation, useNavigate, Link} from 'react-router-dom'

import styles from './EditOutfitForm.module.css'
//Services
import * as outfitService from '../../services/outfitService'
//Types
import { NewOutfitFormData, PhotoFormData, NewOutfitFormElements } from "../../types/forms"

interface EditOutfitProps {
	handleUpdateOutfit: (formData:NewOutfitFormData,photoData:PhotoFormData, outfitId:number)=> void;
}



const EditOutfitForm = (props: EditOutfitProps): JSX.Element => {
    const location = useLocation()
    
    const {outfit} = location.state
    const navigate = useNavigate()
    const [form, setForm] = useState({
        description: '',
    })
    const [photoData, setPhotoData] = useState<PhotoFormData>({
        photo: null
    })
    const [photoPreview, setPhotoPreview] = useState<string>('')
   

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [evt.target.name]: evt.target.value })
        console.log("this is form",form)
    }
// console.log ("this is outfit", outfit)


    const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        if (evt.target.files) reader.readAsDataURL(evt.target.files[0])
        reader.onload = () => {
            const imageUrl = reader.result as string
            setPhotoPreview(imageUrl)
        }
        if (evt.target.files) setPhotoData({ photo: evt.target.files.item(0) })
    }

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        console.log(form);
        console.log(photoData);
        console.log(outfit.id)
        props.handleUpdateOutfit(form, photoData, outfit.id)
        navigate("/outfits")
  }  

    //     if (isSubmitted) return
    //     try {
    //         //   setIsSubmitted(true)
    //         await outfitService.create(form, photoData)
    //         navigate('/')
    //     } catch (err) {
    //         console.log(err)
    //         //   setIsSubmitted(false)
    //     }
    // }

    

    return (
       <>
            <form onSubmit={ handleSubmit }>
           <label htmlFor="description">Description</label>
            <div>
            <input
                required
                type="text"
                name="description"
                id="description-input"
                value={form.description}
                placeholder="Describe the fit"
                onChange={handleChange} 
                />
            </div>
            <label htmlFor="photo-upload" className="form-label">
						Upload Photo
					</label>
         
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						multiple onChange={handleChangePhoto}
					/>
				<button type="submit"> SUBMIT </button>
        </form>
        </>
       
    )
}

export default EditOutfitForm