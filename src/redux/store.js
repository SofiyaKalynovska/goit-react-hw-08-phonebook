import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
