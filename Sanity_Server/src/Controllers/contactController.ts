import { Request, Response } from "express";
import { IDataAccess } from "../Entities/dataAccess";
import { IContactController } from "../Entities/controllers";
import { FormDataFields, IFormDataSanityAPI, allFormDataFields } from "../Entities/databaseTypes";

export class ContactController implements IContactController{
  private dataAccess: IDataAccess;

  constructor(dataAccess: IDataAccess) {
    this.dataAccess = dataAccess;

    this.postMessage = this.postMessage.bind(this);
  }

  private validateContactForm(input: any): input is IFormDataSanityAPI {
    return (
      (input as IFormDataSanityAPI)._type === 'string' &&
      (input as IFormDataSanityAPI).name === 'string' &&
      (input as IFormDataSanityAPI).email === 'string' &&
      (input as IFormDataSanityAPI).message === 'string'
    );
  }

  private validateContactField(input: any): input is FormDataFields {
    return allFormDataFields.includes(input as FormDataFields);
  }

  async postMessage (req: Request, res: Response): Promise<void> {
    try {
      const { body: formData } = req;
      if (!this.validateContactForm(formData)) throw new Error();
      await this.dataAccess.postMessage(formData);
    } catch (err: unknown) {
      console.log(err);
      res.sendStatus(500);
    }
  }
}