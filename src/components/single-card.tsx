import React from 'react';

// ================== MUI ==================
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';

// ================== Redux actions ==================
import {
  hideEpisodes,
  setClearCharFieldFalse,
  showEpisodes,
} from '../redux/booleans/booleans.actions';
import { clearSingleCharacter } from '../redux/characters/characters.slice';

// ================== Redux selectors ==================
import { useBooleansSelector } from '../redux/booleans/booleans.selectors';
import { useCharacterSelector } from '../redux/characters/characters.selectors';

// ================== Redux dispatch ==================
import { useAppDispatch } from '../redux/hooks/redux-typescript-hooks';

// ================== React router ==================
import { useNavigate } from 'react-router-dom';

const SingleCard: React.FC = () => {
  const navigate = useNavigate();
  const goToAll = () => navigate('/all');

  const { clearCharField, clickedShowEpisodes } = useBooleansSelector();
  const { singleCharacter } = useCharacterSelector();

  const dispatch = useAppDispatch();

  const clearCard = () => {
    dispatch(setClearCharFieldFalse());
    dispatch(clearSingleCharacter());
  };

  return (
    <Box
      sx={{
        width: '80%',
        height: 'auto',
        backgroundColor: '#40c4ff',
      }}
    >
      {singleCharacter && clearCharField ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            padding: '20px 0',
          }}
        >
          {clearCharField ? (
            <>
              <Button onClick={goToAll} color="warning">
                See All Chars
              </Button>
              <Button onClick={() => clearCard()} color="info">
                Clear field
              </Button>
            </>
          ) : (
            ''
          )}

          <Card sx={{ minWidth: 180 }}>
            <CardContent>
              {clickedShowEpisodes && (
                <CardActions>
                  <Button
                    color="secondary"
                    size="small"
                    onClick={() => dispatch(hideEpisodes())}
                  >
                    Hide episodes
                  </Button>
                </CardActions>
              )}

              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {!clickedShowEpisodes ? 'Basic info about' : 'Episodeds'}
              </Typography>
              <Typography variant="h5" component="div">
                {singleCharacter.name}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={singleCharacter.image}
                alt={singleCharacter.name}
              />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Location: {singleCharacter.location.name}
              </Typography>
              <Typography variant="subtitle1">
                {!clickedShowEpisodes
                  ? `Gender: ${singleCharacter.gender}`
                  : 'List of episodes'}
              </Typography>
              {clickedShowEpisodes &&
                singleCharacter.episode.map((e) => (
                  <Typography key={e} variant="body2">
                    {e}
                  </Typography>
                ))}
            </CardContent>
            {!clickedShowEpisodes && (
              <CardActions>
                <Button size="small" onClick={() => dispatch(showEpisodes())}>
                  Learn More
                </Button>
              </CardActions>
            )}
          </Card>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            color: '#212121',
            gap: 20,
            padding: '20px 0',
          }}
        >
          <Button href="/all" color="warning">
            See All Chars
          </Button>
          <p>Pick your character</p>
        </div>
      )}
    </Box>
  );
};

export default SingleCard;
