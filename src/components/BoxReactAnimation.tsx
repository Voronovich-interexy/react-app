import Box from '@mui/material/Box/Box';
import React from 'react';
import { Transition } from 'react-transition-group';
import { AnimationStartedType } from '../types/types';

const BoxReactAnimation = ({ animationStarted }: AnimationStartedType) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        height: 'auto',
        backgroundColor: '#40c4ff',
        color: '#212121',
        p: 3,
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed, necessitatibus
      consectetur quis delectus assumenda id distinctio non eveniet nulla, optio nihil vero expedita
      et obcaecati sequi totam eligendi commodi.
      <div className="square__container-frame">
        <Transition in={animationStarted} timeout={0}>
          {(state) => <div className={`running__square-frame ${state}`} />}
        </Transition>
      </div>
    </Box>
  );
};

export default BoxReactAnimation;
