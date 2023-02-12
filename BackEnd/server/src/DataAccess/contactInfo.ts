import { ContactInfoFields, ContactInfoModel } from '../Entities/DatabaseTypes'
import { getAll, update } from '../Entities/queryModel';
import { pgsql } from '../Database/postgresConnection';

export class ContactInfoDAO {

  isContactInfoModel(input: any): input is ContactInfoModel {
    return (
      (input as ContactInfoModel).name === 'string' &&
      (input as ContactInfoModel).displaypic === 'string' &&
      (input as ContactInfoModel).phone === 'string' &&
      (input as ContactInfoModel).email === 'string'
    );
  }

  async getContactInfo(): Promise<ContactInfoModel[] | unknown> {
    try {
      const { rows }: { rows: any[] } = await pgsql.query(getAll.by.mostRecent.ContactInfo());
      const data = <ContactInfoModel[]> rows;
      return data;
    } catch(err) {
      console.log("DAO: Error retrieving data from blogs: ", err);
      return err;
    }
  }

  // async insertContactInfo(contactInput: ContactInfoModel): Promise<void | undefined> {
  //   try {
  //     await pgsql.query(insert.to.ContactInfo(contactInput));
  //   } catch(err) {
  //     console.log("DAO: Error inserting to blog: ", err);
  //   }
  // }

  async updateContactInfo(id: number, field: ContactInfoFields, data: string): Promise<void | unknown> {
    try {
      await pgsql.query(update.ContactInfo(id, field, data));
    } catch(err) {
      return err;
    }
  }

  // // Unimplemented
  // async deleteBlogPost(blogInput: ContactInfoModel):Promise<void | unknown> {
  //   try {
  //     await pgsql.query('a');
  //   } catch(err) {
  //     return err;
  //   }
  // }
}