import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createApp } from '@backstage/app-defaults';
import { EntityPage } from './components/EntityPage'; // Adjust path as necessary

const app = createApp();

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/catalog/:namespace/:kind/:name" element={<EntityPage />} />
      {/* Add more routes here as needed */}
    </Routes>
  </BrowserRouter>
);

export default app.createRoot(App);
