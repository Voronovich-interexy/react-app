import React from 'react';

// ================== MUI ==================
import { Box, Button, TextField } from '@mui/material';

// ================== Hook forms, validation ==================
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './form-component.constants';

// ================== Redux actions ==================
import { setFormData } from '../../redux/forms/form.actions';

// ================== Redux dispatch ==================
import { useAppDispatch } from '../../redux/hooks/redux-typescript-hooks';

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
