import { IAboutSanityAPI, IExperiencesSanityAPI, IFormDataSanityAPI, ISkillsSanityAPI, IWorkSanityAPI } from "./databaseTypes";

export interface IDataAccess {
  getAbout: () => Promise<IAboutSanityAPI[]>
  getSkills: () => Promise<ISkillsSanityAPI[]>
  getExperience: () => Promise<IExperiencesSanityAPI[]>
  getWorks: () => Promise<IWorkSanityAPI[]>
  postMessage: (formData: IFormDataSanityAPI) => Promise<void>
}