import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// ================== Reset style, custom theme MUI ==================
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';

// ================== SCSS ==================
import './styles/main.scss';

// ================== Redux ==================
import { Provider } from 'react-redux';
import store from './redux/store';

// ================== App component ==================
import App from './app';

// ================== Service worker registration ==================
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
);

// кеширование png, jpg, jpeg, heic, gif

// snake case маленька буква дефис

serviceWorkerRegistration.register();

reportWebVitals();
