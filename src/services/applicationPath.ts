export const application_base_url: string = "http://localhost:3000";

export const application_path = {
  GET: {
    ALL_TASKS : '/tasks' , 
    ALL_IN_PROGRESS : '/inprogress' , 
    ALL_COMPLETED : '/completed' , 
    TOTAL_ASSETS : '/totalassets' , 
    DECREMENT_ASSETS : '/decrementassets'
  },
  POST: {
    CREATE_TASK : '/tasks' , 
    ADD_TO_IN_PROGRESS : '/inprogress' , 
    ADD_TO_COMPLETED : '/completed' , 
    ADD_ASSETS : '/totalassets' ,
  },
  PUT: {
    EDIT_TASKS : '/tasks' , 
  },
  DELETE: {
    DELETE_TASK : '/tasks' , 
    DELETE_IN_PROGRESS : '/inprogress' , 
    DELETE_COMPLETED : '/completed'
  },
};