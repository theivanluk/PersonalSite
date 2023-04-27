import { IAboutSanityAPI, IExperiencesSanityAPI, ISkillsSanityAPI, IWorkSanityAPI } from "./databaseTypes";

export interface IDataAccess {
  getAbout: () => Promise<IAboutSanityAPI[]>
  getSkills: () => Promise<ISkillsSanityAPI[]>
  getExperience: () => Promise<IExperiencesSanityAPI[]>
  getWorks: () => Promise<IWorkSanityAPI[]>
}