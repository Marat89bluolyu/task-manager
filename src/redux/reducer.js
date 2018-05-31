import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


import authReducer from './modules/auth';
import tasks from "./modules/tasks";
import idTask from "./modules/idTask/reducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  idTask,
  tasks
});
