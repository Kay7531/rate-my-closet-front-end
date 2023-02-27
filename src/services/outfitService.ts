import { Outfit } from "../types/models";
import { NewOutfitFormData, PhotoFormData } from "../types/forms";
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/outfits`

async function index(): Promise<Outfit[]> {
    try {
      const res = await fetch(BASE_URL, {
        headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
      })
      return await res.json() as Outfit[]
    } catch (error) {
      throw error
    }
  }

  async function create(formData: NewOutfitFormData, photoFormData: PhotoFormData) {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      const post = await res.json()
      if (photoFormData.photo) {
        const photoData = new FormData()
        photoData.append('photo', photoFormData.photo)
        await addPhoto(photoData, post.id)
      }
    } catch (error) {
      throw(error)
    }
  }
  async function addPhoto(photoData: FormData, outfitId: number): Promise<string> {
    try {
      const res = await fetch(`${BASE_URL}/${outfitId}/add-photo`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: photoData
      })
      return await res.json() as string
    } catch (error) {
      throw error
    }
  }
  

  export {
    index,
    create,
    addPhoto
  }