/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */
export interface Outfit {
  id: number;
  description: string;
  photo?:string;
  profileId: number;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
  author: Profile
}

export interface Comment {
  id: number;
  content: string;
  rating: number;
  profileId: number;
  outfitId: number;
  createdAt: string;
  updatedAt: string;
}


export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
