import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';

import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../store/hooks/reduxTypescriptHooks';
import { setFormData } from '../../store/formDataSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './FromComponent.constants';

const FormComponent = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    dispatch(setFormData(data));
    reset();
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
            <TextField
              helperText={errors.login ? `${errors.login.message}` : ''}
              autoComplete="off"
              variant="outlined"
              error={errors.login ? true : false}
              label="Login"
              {...field}
            />
          )}
          name="login"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => (
            <TextField
              helperText={errors.password ? `${errors.password.message}` : ''}
              label="Password"
              type="password"
              {...field}
              error={errors.password ? true : false}
            />
          )}
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
