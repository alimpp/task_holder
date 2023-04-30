export const application_base_url: string = "http://localhost:3000";

export const application_path = {
  GET: {
    ALL_TASKS : '/tasks' , 
    ALL_IN_PROGRESS : '/inprogress'
  },
  POST: {
    CREATE_TASK : '/tasks' , 
    ADD_TO_IN_PROGRESS : '/inprogress'
  },
  PUT: {},
  DELETE: {
    DELETE_TASK : '/tasks'
  },
};