import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createApp } from '@backstage/app-defaults';
import { JenkinsPage } from '../dynamic-plugins/dist/backstage-plugin-jenkins'; // Adjust path as necessary
import {
  Sidebar,
  SidebarGroup,
  SidebarItem,
  SidebarDivider,
  SidebarSpace,
  SidebarPage,
} from '@backstage/core-components';
import { JenkinsIcon } from '@backstage/plugin-jenkins';

const app = createApp();

const App = () => (
  <SidebarPage>
    <Sidebar>
      <SidebarGroup label="Menu" icon={<JenkinsIcon />}>
        <SidebarItem icon={<JenkinsIcon />} to="/jenkins" text="Jenkins" />
        {/* Add more sidebar items here as needed */}
      </SidebarGroup>
      <SidebarDivider />
      <SidebarSpace />
    </Sidebar>
    <Routes>
      <Route path="/jenkins" element={<JenkinsPage />} />
      {/* Add more routes here as needed */}
    </Routes>
  </SidebarPage>
);

export default app.createRoot(App);
