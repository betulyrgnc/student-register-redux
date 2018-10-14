import { combineReducers } from 'redux';
import kimlikDogrulamareducers from './KimlikDogrulamareducers';
import StudentCreateReducers from './StudentCreateReducer';
import StudentDataReducers from './StudentDataReducers';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikDogrulamareducers,
  studentsListResponse: StudentCreateReducers,
  studentDataResponse: StudentDataReducers
});
