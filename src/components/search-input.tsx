import React from 'react';

// ================== MUI ==================
import { Autocomplete, TextField } from '@mui/material';

// ================== Redux actions ==================
import {
  closeSearchInput,
  openSearchInput,
  setClearCharFieldTrue,
} from '../redux/booleans/booleans.actions';
import {
  fetchCharsByName,
  fetchSingleCharacter,
} from '../redux/characters/characters.actions';

// ================== Redux selectors ==================
import { useCharacterSelector } from '../redux/characters/characters.selectors';
import { useBooleansSelector } from '../redux/booleans/booleans.selectors';

// ================== Redux dispatch ==================
import { useAppDispatch } from '../redux/hooks/redux-typescript-hooks';

// ================== Lodash debounce ==================
import debounce from 'lodash.debounce';

const SearchInput: React.FC = () => {
  const { searchInputOpened } = useBooleansSelector();
  const { fetchedChars } = useCharacterSelector();
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
      options={fetchedChars}
      sx={{
        width: '70%',
        minWidth: 150,
      }}
      onInputChange={debounce(
        (e: any, value: string, reason: any) =>
          dispatch(fetchCharsByName(value)),
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
