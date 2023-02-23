import { createSlice } from '@reduxjs/toolkit';
import { FormDataState } from '../../types/types';

const initialState: FormDataState = {
  dataFromForm: {
    login: '',
    password: '',
  },
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.dataFromForm = action.payload;
    },
  },
});

export default formDataSlice.reducer;
