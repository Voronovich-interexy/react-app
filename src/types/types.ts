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
  episode: [];
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
export type ArrayOfAllChars = {
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

export enum SwitchReturned {
  Success = 'success',
  Error = 'error',
  Default = 'default',
  Primary = 'primary',
  Info = 'info',
  Warning = 'warning',
  Secondary = 'secondary',
}

export interface INavBarProps {
  drawerWidth: number;
}

export type AnimationStartedType = {
  animationStarted: boolean;
};

export type RickMortyState = {
  fetchedChars: RickMortyData[];
  loading: boolean;
  error: string | null;
  singleCharacter: SingleChar | null;
  fourPersons: ArrayOfChars[];
  allPersons: ArrayOfAllChars[];
};

export type BooleanSliceState = {
  animationStarted: boolean;
  clearCharField: boolean;
  mobileOpen: boolean;
  clickedShowEpisodes: boolean;
  searchInputOpened: boolean;
};

export type FormDataState = {
  dataFromForm: {
    login: string;
    password: string;
  };
};

export type ChildrenPropsMainComponent = {
  children: React.ReactNode;
  drawerWidth: number;
};
