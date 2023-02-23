import { useAppSelector } from '../hooks/redux-typescript-hooks';

export const useFormSelector = () =>
  useAppSelector((state) => state.formDataReducer);
