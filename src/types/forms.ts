/* ---------==== custom forms ====--------- */



/* ---------===== auth forms =====--------- */

export interface NewOutfitFormData {
  description: string;
}
export type NewOutfitFormElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export interface NewCommentFormData {
  content: string;
  rating: number;
}


export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}

