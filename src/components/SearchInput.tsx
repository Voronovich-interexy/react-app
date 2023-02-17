import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { RickMortyData, SingleChar } from '../types/types';
import { getCharByName, getSingleCharacter } from '../api/characters';

type SetPropTypes = {
  setSingleChar: React.Dispatch<React.SetStateAction<SingleChar | undefined>>;
};

const SearchInput = ({ setSingleChar }: SetPropTypes) => {
  const [charsByName, setCharsByName] = useState<RickMortyData[]>([]);
  const [open, setOpen] = useState(true);

  const getCharById = (id: number) => {
    setOpen(false);
    getSingleCharacter(id).then((char) => setSingleChar(char));
  };

  return (
    <Autocomplete
      freeSolo
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      id="custom-autocomplete"
      options={charsByName}
      sx={{
        width: '70%',
        minWidth: 150,
      }}
      onInputChange={(e: any, value: any, reason: any) =>
        getCharByName(value).then((c) => setCharsByName(c))
      }
      getOptionLabel={(option: any) => `${option.name}: ${option.id}`} //filter value
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
