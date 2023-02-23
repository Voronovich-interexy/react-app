import { Box } from '@mui/material';

// ================== App Routes ==================
import AppRoutes from './components/app-routes';

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppRoutes />
    </Box>
  );
}

// React.FC нак каждый компонент
// Враппер на каждый компонент
// <AppRoutes/> отдельный файлик с роутами, где я рендерю странички

// в индексе app - в app -> роуты
