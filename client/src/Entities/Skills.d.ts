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
