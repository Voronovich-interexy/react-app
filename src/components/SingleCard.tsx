import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import { SingleChar } from '../types/types';

type SingleCardProps = {
  singleChar: SingleChar | undefined;
  clearCharField: boolean;
  setClearCharField: React.Dispatch<React.SetStateAction<boolean>>;
  setSingleChar: React.Dispatch<React.SetStateAction<SingleChar | undefined>>;
};

const SingleCard: React.FC<SingleCardProps> = ({
  singleChar,
  clearCharField,
  setClearCharField,
  setSingleChar,
}) => {
  const [clicked, setClicked] = useState(false);

  const clearCard = () => {
    setClearCharField(false);
    setSingleChar(undefined);
  };

  return (
    <Box
      sx={{
        width: '80%',
        height: 'auto',
        backgroundColor: '#40c4ff',
      }}
    >
      {singleChar && clearCharField ? (
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
            <Button onClick={() => clearCard()} color="info">
              Clear field
            </Button>
          ) : (
            ''
          )}

          <Card sx={{ minWidth: 180 }}>
            <CardContent>
              {clicked && (
                <CardActions>
                  <Button color="secondary" size="small" onClick={() => setClicked(false)}>
                    Hide episodes
                  </Button>
                </CardActions>
              )}

              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {!clicked ? 'Basic info about' : 'Episodeds'}
              </Typography>
              <Typography variant="h5" component="div">
                {singleChar.name}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={singleChar.image}
                alt={singleChar.name}
              />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Location: {singleChar.location.name}
              </Typography>
              <Typography variant="subtitle1">
                {!clicked ? `Gender: ${singleChar.gender}` : 'List of episodes'}
              </Typography>
              {clicked &&
                singleChar.episode.map((e) => (
                  <Typography key={e} variant="body2">
                    {e}
                  </Typography>
                ))}
            </CardContent>
            {!clicked && (
              <CardActions>
                <Button size="small" onClick={() => setClicked(true)}>
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
            flexWrap: 'wrap',
            justifyContent: 'center',
            color: '#212121',
            gap: 20,
            padding: '20px 0',
          }}
        >
          Pick your character
        </div>
      )}
    </Box>
  );
};

export default SingleCard;
