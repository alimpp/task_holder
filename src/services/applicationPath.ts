export const application_base_url: string = "http://localhost:3000";

export const application_path = {
  GET: {
    ALL_TASKS : '/tasks' , 
    ALL_IN_PROGRESS : '/inprogress' , 
    ALL_COMPLETED : '/completed' , 
    TOTAL_ASSETS : '/totalassets' , 
    DECREMENT_ASSETS : '/decrementassets' , 
    DECREMENT_LISTS : '/decrement-list'
  },
  POST: {
    CREATE_TASK : '/tasks' , 
    ADD_TO_IN_PROGRESS : '/inprogress' , 
    ADD_TO_COMPLETED : '/completed' , 
    ADD_ASSETS : '/totalassets' ,
    ADD_TO_DECREMENT_LISTS : '/decrement-list'
  },
  PUT: {
    EDIT_TASKS : '/tasks' , 
    ADD_TO_DECREMENT : '/decrementassets'
  },
  DELETE: {
    DELETE_TASK : '/tasks' , 
    DELETE_IN_PROGRESS : '/inprogress' , 
    DELETE_COMPLETED : '/completed'
  },
};