import React from 'react';

// ================== MUI ==================
import { Card, CardContent, Typography } from '@mui/material';

// ================== Redux selectors ==================
import { useFormSelector } from '../redux/forms/form.selectors';

const FormData: React.FC = () => {
  const { dataFromForm } = useFormSelector();
  return (
    <Card
      sx={{
        minWidth: 180,
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div">
          User data:
        </Typography>
        <Typography variant="h5" component="div">
          Login: {dataFromForm.login}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Password: {dataFromForm.password}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FormData;
