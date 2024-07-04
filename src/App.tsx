import React from 'react';
import { createApp } from '@backstage/core-app-api';
import { Router } from '@backstage/plugin-catalog';
import { EntityPage, EntityLayout, EntityLayoutRoute } from '@backstage/plugin-catalog';

const app = createApp({
  components: {
    // other components
  },
  bindRoutes: ({ bind }) => {
    bind(catalogPlugin.externalRoutes, {
      createComponent: createComponentRouteRef,
    });
  },
});

const CustomEntityPage = () => (
  <EntityLayout>
    <EntityLayout.Route path="/" title="History">
      <OverviewComponent />
    </EntityLayout.Route>
  </EntityLayout>
);

const App = () => (
  <AppProvider app={app}>
    <Router>
      <CustomEntityPage />
    </Router>
  </AppProvider>
);

export default App;
