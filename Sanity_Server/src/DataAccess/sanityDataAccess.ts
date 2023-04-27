import { sanity_abouts, sanity_experience, sanity_skills, sanity_works } from "../Constants/sanityTypeNames";
import { IDataAccess } from "../Entities/dataAccess";
import { IAboutSanityAPI, IExperiencesSanityAPI, IFormDataSanityAPI, ISkillsSanityAPI, IWorkSanityAPI } from "../Entities/databaseTypes";
import { sanityClient, sanityQuery } from "../SanityDB/sanityClient";

export default class SanityDataAccess implements IDataAccess {

  async getAbout(): Promise<IAboutSanityAPI[]> {
    return <IAboutSanityAPI[]> await sanityClient.fetch(sanityQuery(sanity_abouts));
  }

  async getSkills(): Promise<ISkillsSanityAPI[]> {
    console.log('skills');
    return <ISkillsSanityAPI[]> await sanityClient.fetch(sanityQuery(sanity_skills));
  }

  async getExperience(): Promise<IExperiencesSanityAPI[]> {
    return <IExperiencesSanityAPI[]> await sanityClient.fetch(sanityQuery(sanity_experience));
  }

  async getWorks(): Promise<IWorkSanityAPI[]> {
    return <IWorkSanityAPI[]> await sanityClient.fetch(sanityQuery(sanity_works));
  }

  async postMessage(formData: IFormDataSanityAPI): Promise<void> {
    await sanityClient.create(formData);
  }
}