import { AboutMeModel, AboutMeFields } from '../Entities/DatabaseTypes'
import { getAll, update } from '../Entities/queryModel';
import { pgsql } from '../Database/postgresConnection';

export class aboutMeDAO {

  isAboutMe(input: any): input is AboutMeModel {
    return (
      (input as AboutMeModel).description === 'string' &&
      (input as AboutMeModel).lastupdated === 'string' &&
      (input as AboutMeModel).displaypic === 'string'
    );
  }

  async getAboutMe(): Promise<AboutMeModel[] | unknown> {
    try {
      const { rows }: { rows: any[] } = await pgsql.query(getAll.by.mostRecent.AboutMe());
      const data = <AboutMeModel[]> rows;
      return data;
    } catch(err) {
      console.log("DAO: Error retrieving data from aboutMe: ", err);
      return err;
    }
  }

  // async insertBlogPost(aboutMeInput: AboutMeModel): Promise<void | undefined> {
  //   try {
  //     await pgsql.query(insert.to.AboutMe(aboutMeInput));
  //   } catch(err) {
  //     console.log("DAO: Error inserting to aboutMe: ", err);
  //   }
  // }

  async updateAboutMe(id: number, field: AboutMeFields, data: string): Promise<void | unknown> {
    try {
      await pgsql.query(update.AboutMe(id, field, data));
    } catch(err) {
      console.log("DAO: Error updating data for aboutMe: ", err);
      return err;
    }
  }

  // // Unimplemented
  // async deleteBlogPost(blogInput: AboutMeModel):Promise<void | unknown> {
  //   try {
  //     await pgsql.query('a');
  //   } catch(err) {
  //     return err;
  //   }
  // }
}