import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../store/hooks/reduxTypescriptHooks';

const FormData = () => {
  const formData = useAppSelector((state) => state.formDataReducer.dataFromForm);
  return (
    <Card sx={{ minWidth: 180, width: '60%', display: 'flex', justifyContent: 'center' }}>
      <CardContent>
        <Typography variant="h4" component="div">
          User data:
        </Typography>
        <Typography variant="h5" component="div">
          Login: {formData.login}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Password: {formData.password}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FormData;
