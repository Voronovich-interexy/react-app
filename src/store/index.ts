import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import booleanValuesReducer from './booleanValuesSlice';
import rickAndMortyReducer from './rickAndMortySlice';
import formDataReducer from './formDataSlice';

const middlewareNoSerializableCheck = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: { rickAndMortyReducer, booleanValuesReducer, formDataReducer },
  middleware: middlewareNoSerializableCheck,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
