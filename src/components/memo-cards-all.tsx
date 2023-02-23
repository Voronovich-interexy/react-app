import React, { useMemo, useEffect } from 'react';

// ================== MUI ==================
import { Button, Chip, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar';
import Box from '@mui/material/Box/Box';
import CardContent from '@mui/material/CardContent/CardContent';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import red from '@mui/material/colors/red';

// ================== Styled Components ==================
import { CustomCard } from './components.styled';

// ================== Types ==================
import { SwitchReturned } from '../types/types';

// ================== Redux actions ==================
import { fetchAllPersons } from '../redux/characters/characters.actions';

// ================== Redux selectors ==================
import { useCharacterSelector } from '../redux/characters/characters.selectors';

// ================== Redux dispatch ==================
import { useAppDispatch } from '../redux/hooks/redux-typescript-hooks';

// ================== React router dom ==================
import { useNavigate } from 'react-router-dom';

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

const MemoCardsAll: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  const { allPersons } = useCharacterSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllPersons());
  }, [dispatch]);

  const memoCardsAll = useMemo(() => {
    return allPersons.map((person) => {
      return (
        <CustomCard key={person.id} sx={{ width: '100%', maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {person.name.slice(0, 3)}
              </Avatar>
            }
            title={person.name}
            subheader={person.created.slice(0, 10)}
          />
          <CardMedia
            component="img"
            height="194"
            image={person.image}
            alt={person.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Location: {person.location.name}
            </Typography>
            <Chip label={person.status} color={setColor(person.status)} />
          </CardContent>
        </CustomCard>
      );
    });
  }, [allPersons]);

  return (
    <Box
      sx={{
        width: '80%',
        height: 'auto',
        backgroundColor: '#40c4ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Button onClick={goHome} color="warning">
        Back
      </Button>
      {allPersons.length ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20,
            padding: '20px 0',
          }}
        >
          {memoCardsAll}
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

export default MemoCardsAll;
