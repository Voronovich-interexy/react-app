import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { RickMortyState } from '../../types/types';
import {
  fetchAllPersons,
  fetchCharsByName,
  fetchFourPersons,
  fetchSingleCharacter,
} from './characters.actions';

const initialState: RickMortyState = {
  fetchedChars: [],
  loading: false,
  error: null,
  singleCharacter: null,
  fourPersons: [],
  allPersons: [],
};

const rickAndMortySlice = createSlice({
  name: 'rickAndMortySlice',
  initialState,
  reducers: {
    clearSingleCharacter(state) {
      state.singleCharacter = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharsByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharsByName.fulfilled, (state, action) => {
        state.fetchedChars = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSingleCharacter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleCharacter.fulfilled, (state, action) => {
        state.singleCharacter = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFourPersons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFourPersons.fulfilled, (state, action) => {
        state.fourPersons = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllPersons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPersons.fulfilled, (state, action) => {
        state.allPersons = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default rickAndMortySlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { clearSingleCharacter } = rickAndMortySlice.actions;
