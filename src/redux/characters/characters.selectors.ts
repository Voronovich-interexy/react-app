import { useAppSelector } from '../hooks/redux-typescript-hooks';

export const useCharacterSelector = () =>
  useAppSelector((state) => state.rickAndMortyReducer);
