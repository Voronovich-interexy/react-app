import { Chip, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar';
import Box from '@mui/material/Box/Box';
import CardContent from '@mui/material/CardContent/CardContent';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import red from '@mui/material/colors/red';
import React, { useMemo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks/reduxTypescriptHooks';
import { fetchFourPersons } from '../store/rickAndMortySlice';
import { SwitchReturned } from '../types/types';
import { CustomCard } from './components.styled';

function setColor(
  status: string,
):
  | SwitchReturned.Success
  | SwitchReturned.Error
  | SwitchReturned.Default
  | SwitchReturned.Secondary
  | SwitchReturned.Primary
  | SwitchReturned.Info
  | SwitchReturned.Warning
  | undefined {
  switch (status) {
    case 'Alive':
      return SwitchReturned.Success;
    case 'Dead':
      return SwitchReturned.Error;
    default:
      return SwitchReturned.Info;
  }
}

const MemoCards = () => {
  const fourPersons = useAppSelector((state) => state.rickAndMortyReducer.fourPersons);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFourPersons([1, 2, 3, 4]));
  }, [dispatch]);

  const memoCards = useMemo(() => {
    return fourPersons.map((person) => {
      return (
        <CustomCard key={person.data.id} sx={{ width: '100%', maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {person.data.name.slice(0, 3)}
              </Avatar>
            }
            title={person.data.name}
            subheader={person.data.created.slice(0, 10)}
          />
          <CardMedia
            component="img"
            height="194"
            image={person.data.image}
            alt={person.data.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Location: {person.data.location.name}
            </Typography>
            <Chip label={person.data.status} color={setColor(person.data.status)} />
          </CardContent>
        </CustomCard>
      );
    });
  }, [fourPersons]);

  return (
    <Box
      sx={{
        width: '80%',
        height: 'auto',
        backgroundColor: '#40c4ff',
      }}
    >
      {fourPersons.length ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20,
            padding: '20px 0',
          }}
        >
          {memoCards}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20,
            padding: '20px 0',
          }}
        >
          No card available
        </div>
      )}
    </Box>
  );
};

export default MemoCards;
