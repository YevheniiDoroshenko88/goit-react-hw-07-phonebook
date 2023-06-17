import { configureStore } from '@reduxjs/toolkit';
import {filterReducer} from './Filter/FilterSlice'
import {contactsReducer} from './Contacts/contactsSlice';

//  const rootReducer = combineReducers({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer
//   },
  
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  },
});
