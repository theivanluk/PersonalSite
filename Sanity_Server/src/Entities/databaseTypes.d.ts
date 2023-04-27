export interface IAboutSanityAPI {
  title: string,
  description: string,
  imgUrl: string
}

export interface IFormData {
  name: string,
  email: string,
  message: string
}

export interface IFormDataSanityAPI extends IFormData {
  _type: string
}

export interface ISkillsSanityAPI {
  name: string,
  icon: string,
  bgColor: string,
}

interface IExperiencesSanityAPI {
  year: string,
  works: IWorkExperienceSanityAPI[]
}

export interface IWorkExperienceSanityAPI {
  name: string,
  company: string,
  desc: string
}

export interface IWorkSanityAPI {
  name: string,
  imgUrl: string,
  projectLink: string,
  codeLink: string,
  title: string,
  description: string,
  tags: string[]
}