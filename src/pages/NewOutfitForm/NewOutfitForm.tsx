import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import styles from './NewOutfitForm.module.css'
//Services
import * as outfitService from '../../services/outfitService'
//Types
import { NewOutfitFormData, PhotoFormData, NewOutfitFormElements } from "../../types/forms"

interface NewOutfitFormProps {
    newOutfitFormData: NewOutfitFormData;
    photoFormData: PhotoFormData
}


const NewOutfitForm = (props: NewOutfitFormProps): JSX.Element => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        description: '',
    })
    const [photoData, setPhotoData] = useState<PhotoFormData>({
        photo: null
    })
    const [photoPreview, setPhotoPreview] = useState<string>('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (evt: React.ChangeEvent<NewOutfitFormElements>) => {
        setForm({ ...form, [evt.target.name]: evt.target.value })
    }



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
        if (isSubmitted) return
        try {
            //   setIsSubmitted(true)
            await outfitService.create(form, photoData)
            navigate('/')
        } catch (err) {
            console.log(err)
            //   setIsSubmitted(false)
        }
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