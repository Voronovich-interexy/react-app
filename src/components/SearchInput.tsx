import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import {
  closeSearchInput,
  openSearchInput,
  setClearCharFieldTrue,
} from '../store/booleanValuesSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks/reduxTypescriptHooks';
import { fetchCharsByName, fetchSingleCharacter } from '../store/rickAndMortySlice';
import debounce from 'lodash.debounce';

const SearchInput = () => {
  const searchInputOpened = useAppSelector((state) => state.booleanValuesReducer.searchInputOpened);
  const charsByName = useAppSelector((state) => state.rickAndMortyReducer.fetchedChars);
  const dispatch = useAppDispatch();

  const getCharById = (id: number) => {
    dispatch(closeSearchInput());
    dispatch(setClearCharFieldTrue());
    dispatch(fetchSingleCharacter(id));
  };

  return (
    <Autocomplete
      freeSolo
      open={searchInputOpened}
      onOpen={() => dispatch(openSearchInput())}
      onClose={() => dispatch(closeSearchInput())}
      id="custom-autocomplete"
      options={charsByName}
      sx={{
        width: '70%',
        minWidth: 150,
      }}
      onInputChange={debounce(
        (e: any, value: string, reason: any) => dispatch(fetchCharsByName(value)),
        300,
      )}
      getOptionLabel={(option: any) => `${option.name}: ${option.id}`}
      renderInput={(params) => {
        return <TextField {...params} label="Search Character" />;
      }}
      renderOption={(props, option, state) => {
        return (
          <li
            onClick={() => getCharById(option.id)}
            className="char_list"
            style={{ cursor: 'pointer' }}
            key={`${option.name}: ${option.id}`}
          >{`${option.name}`}</li>
        );
      }}
    />
  );
};

export default SearchInput;
