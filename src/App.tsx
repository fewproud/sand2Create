import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createApp } from '@backstage/app-defaults';
import { JenkinsPage } from '../dynamic-plugins/dist/backstage-plugin-jenkins'; // Adjust this path as necessary

// Initialize the Backstage app
const app = createApp({
  // You can customize your app's components and settings here
});

/**
 * Main application component
 */
const App = () => (
  <BrowserRouter>
    <AppBar position="static">
      <Toolbar>
        <Tabs>
          <Tab label="Jenkins" component="a" href="/jenkins" />
          {/* Add more tabs as needed */}
        </Tabs>
      </Toolbar>
    </AppBar>    
    <Routes>
      <Route path="/jenkins" element={<JenkinsPage />} />
    </Routes>
  </BrowserRouter>
);

// Export the app's root component
export default app.createRoot(App);
