import React, { useEffect } from 'react';

// ================== MUI ==================
import Box from '@mui/material/Box/Box';

// ================== React transition group ==================
import { Transition } from 'react-transition-group';

// ================== Redux actions ==================
import { startAnimation } from '../redux/booleans/booleans.actions';

// ================== Redux selectors ==================
import { useBooleansSelector } from '../redux/booleans/booleans.selectors';

// ================== Redux dispatch ==================
import { useAppDispatch } from '../redux/hooks/redux-typescript-hooks';

const BoxReactAnimation: React.FC = () => {
  const { animationStarted } = useBooleansSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startAnimation());
  }, [dispatch]);

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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed,
      necessitatibus consectetur quis delectus assumenda id distinctio non
      eveniet nulla, optio nihil vero expedita et obcaecati sequi totam eligendi
      commodi.
      <div className="square__container-frame">
        <Transition in={animationStarted} timeout={0}>
          {(state) => <div className={`running__square-frame ${state}`} />}
        </Transition>
      </div>
    </Box>
  );
};

export default BoxReactAnimation;
