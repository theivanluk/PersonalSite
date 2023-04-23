export interface IFormData {
  name: string,
  email: string,
  message: string
}

export interface IFormDataSanityAPI extends IFormData {
  _type: string
}