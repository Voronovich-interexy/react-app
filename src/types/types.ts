export type RickMortyData = {
  id: number;
  name: string;
};

export type SingleChar = {
  name: string;
  gender: string;
  species: string;
  image: string;
  id: number;
  location: {
    name: string;
  };
};

export type ArrayOfChars = {
  data: {
    name: string;
    gender: string;
    id: number;
    status: string;
    species: string;
    created: string;
    image: string;
    location: {
      name: string;
    };
    origin: {
      name: string;
    };
  };
};

export enum SwitchReturned {
  Success = 'success',
  Error = 'error',
  Default = 'default',
  Primary = 'primary',
  Info = 'info',
  Warning = 'warning',
  Secondary = 'secondary',
}
