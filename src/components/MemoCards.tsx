import { Chip, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar';
import Box from '@mui/material/Box/Box';
import CardContent from '@mui/material/CardContent/CardContent';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import red from '@mui/material/colors/red';
import React, { useMemo } from 'react';
import { CardsProps, SwitchReturned } from '../types/types';

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

const MemoCards = ({ cards }: CardsProps) => {
  const memoCards = useMemo(() => {
    return cards.map((card) => {
      return (
        <CustomCard key={card.data.id} sx={{ width: '100%', maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {card.data.name.slice(0, 3)}
              </Avatar>
            }
            title={card.data.name}
            subheader={card.data.created.slice(0, 10)}
          />
          <CardMedia component="img" height="194" image={card.data.image} alt={card.data.name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Location: {card.data.location.name}
            </Typography>
            <Chip label={card.data.status} color={setColor(card.data.status)} />
          </CardContent>
        </CustomCard>
      );
    });
  }, [cards]);
  return (
    <Box
      sx={{
        width: '80%',
        height: 'auto',
        backgroundColor: '#40c4ff',
      }}
    >
      {cards.length ? (
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
