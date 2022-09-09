import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import DetailsReducer from './showDetails';
import ShowsReducer from './shows';

const rootReducer = combineReducers({
  shows: ShowsReducer,
  details: DetailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
