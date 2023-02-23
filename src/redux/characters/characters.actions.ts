import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchFourChars,
  getAllCharacters,
  getCharByName,
  getSingleCharacter,
} from '../../api/characters';
import {
  ArrayOfAllChars,
  ArrayOfChars,
  RickMortyData,
  SingleChar,
} from '../../types/types';
// import { rickAndMortySlice } from './characters.slice';

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

export const fetchAllPersons = createAsyncThunk<ArrayOfAllChars[]>(
  'rickAndMortySlice/fetchAllPersons',
  async function () {
    const response = await getAllCharacters();
    return response;
  },
);
