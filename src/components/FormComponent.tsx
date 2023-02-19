import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';

import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../store/hooks/reduxTypescriptHooks';
import { setFormData } from '../store/formDataSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const schema = yup
  .object({
    login: yup.string().required('Login is a required field'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(5, 'Min 5 symbols')
      .matches(/^[0-9a-zA-Z]{5,}$/, 'Password incorrect'),
  })
  .required();

const FormComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    dispatch(setFormData(data));
  };

  //TODO - work incorrectly

  return (
    <form style={{ width: '80%' }} onSubmit={handleSubmit(onSubmit)}>
      <Box
        component="div"
        sx={{
          p: 2,
          border: '1px dashed grey',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Controller
          render={({ field }) => (
            <TextField autoComplete="off" variant="outlined" label="Login" {...field} />
          )}
          name="login"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <TextField label="Password" type="password" {...field} />}
          name="password"
          control={control}
          defaultValue=""
        />
        <Button variant="contained" color="secondary" type="submit">
          Sign in
        </Button>
      </Box>
    </form>
  );
};

export default FormComponent;
