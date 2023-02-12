import { ProjectsModel, ProjectFields } from '../Entities/DatabaseTypes'
import { insert, getAll, update, del } from '../Entities/queryModel';
import { pgsql } from '../Database/postgresConnection';

export class ProjectsDAO {

  isProjectsModel(input: any): input is ProjectsModel {
    return (
      (input as ProjectsModel).project_name === 'string' &&
      (input as ProjectsModel).project_description === 'string' &&
      (input as ProjectsModel).project_url === 'string' &&
      (input as ProjectsModel).project_pic === 'string'
    );
  }

  async getProjects(page: number = 1): Promise<ProjectsModel[] | unknown> {
    try {
      const { rows }: { rows: any[] } = await pgsql.query(getAll.by.mostRecent.Projects(page));
      const data = <ProjectsModel[]> rows;
      return data;
    } catch(err) {
      console.log("DAO: Error retrieving data from blogs: ", err);
      return err;
    }
  }

  async insertProjects(projectInput: ProjectsModel): Promise<void | unknown> {
    try {
      await pgsql.query(insert.to.Projects(projectInput));
    } catch(err) {
      console.log("DAO: Error inserting to blog: ", err);
      return err;
    }
  }

  async updateProjects(id: number, field: ProjectFields, data: string): Promise<void | unknown> {
    try {
      await pgsql.query(update.Projects(id, field, data));
    } catch(err) {
      return err;
    }
  }

  // Unimplemented
  async deleteProjects(blogInput: ProjectsModel): Promise<void | unknown> {
    try {
      await pgsql.query('a');
    } catch(err) {
      return err;
    }
  }
}