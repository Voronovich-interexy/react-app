import React from 'react';

// ================== Router ==================
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ================== Pages ==================
import AllCharsPage from '../pages/all-chars-page';
import HomePage from '../pages/home-page';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<AllCharsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
