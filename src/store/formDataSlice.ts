import { createSlice } from '@reduxjs/toolkit';

type FormDataState = {
  dataFromForm: {
    login: string;
    password: string;
  };
};

const initialState: FormDataState = {
  dataFromForm: {
    login: '',
    password: '',
  },
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.dataFromForm = action.payload;
    },
  },
});

export const { setFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
