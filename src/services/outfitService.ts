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

  export {
    index,
  }