import { combineReducers } from 'redux';
import ActivitiesReducer from './ActivitiesReducer';

const RootReducer = combineReducers({
  activities: ActivitiesReducer,
});

export default RootReducer;
