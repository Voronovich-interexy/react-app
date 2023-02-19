import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { fetchFourChars, getCharByName, getSingleCharacter } from '../api/characters';
import { ArrayOfChars, RickMortyData, RickMortyState, SingleChar } from '../types/types';

const initialState: RickMortyState = {
  fetchedChars: [],
  loading: false,
  error: null,
  singleCharacter: null,
  fourPersons: [],
};

export const fetchCharsByName = createAsyncThunk<RickMortyData[], string>(
  'rickAndMortySlice/fetchCharsByName',
  async function (text) {
    const response = await getCharByName(text);
    return response;
  },
);

export const fetchSingleCharacter = createAsyncThunk<SingleChar, number>(
  'rickAndMortySlice/fetchSingleCharacter',
  async function (id) {
    const response = await getSingleCharacter(id);
    return response;
  },
);

export const fetchFourPersons = createAsyncThunk<ArrayOfChars[], number[]>(
  'rickAndMortySlice/fetchFourPersons',
  async function (ids) {
    const response = await fetchFourChars(ids);
    return response;
  },
);

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
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearSingleCharacter } = rickAndMortySlice.actions;

export default rickAndMortySlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
