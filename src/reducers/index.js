import { combineReducers } from 'redux';
import KimlikDogrulamareducers from './KimlikDogrulamareducers';
import StudentCreateReducers from './StudentCreateReducer';
import StudentDataReducers from './StudentDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
  kimlikdogrulamaResponse: KimlikDogrulamareducers,
  studentsListResponse: StudentCreateReducers,
  studentDataResponse: StudentDataReducers,
  studentUpdateResponse: StudentUpdateReducers
});
