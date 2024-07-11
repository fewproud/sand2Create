import React from 'react';
import {
  EntityLayout,
  EntitySwitch,
  EntitySwitchCase,
} from '@backstage/plugin-catalog';
import { EntityJenkinsContent } from '@backstage/plugin-jenkins';
import { EntityOverviewContent } from '@backstage/plugin-catalog';
import { JenkinsIcon } from '@backstage/plugin-jenkins';

const EntityPageLayout = () => (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <EntityOverviewContent />
    </EntityLayout.Route>
    <EntityLayout.Route path="/jenkins" title="Jenkins" icon={JenkinsIcon}>
      <EntityJenkinsContent />
    </EntityLayout.Route>
  </EntityLayout>
);

export const EntityPage = () => {
  return <EntityPageLayout />;
};
