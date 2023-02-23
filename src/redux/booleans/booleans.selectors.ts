import { useAppSelector } from '../hooks/redux-typescript-hooks';

export const useBooleansSelector = () =>
  useAppSelector((state) => state.booleanValuesReducer);
