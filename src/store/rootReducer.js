import {
  combineReducers,
} from 'redux';
import { calculateReducer } from './calculateReducer';
import { themeReducer } from './themeReducer';


export const rootReducer = combineReducers({
  calculator: calculateReducer,
  theme: themeReducer,
});
