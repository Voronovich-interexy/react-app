import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import booleanValuesReducer from './booleans/booleans.slice';
import rickAndMortyReducer from './characters/characters.slice';
import formDataReducer from './forms/form.slice';

const middlewareNoSerializableCheck = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: { booleanValuesReducer, formDataReducer, rickAndMortyReducer },
  middleware: middlewareNoSerializableCheck,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
