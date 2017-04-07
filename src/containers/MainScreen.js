import React from 'react';
import Drawer from 'react-native-drawer-layout-polyfill';
import { Route } from 'react-router-native';

import DrawerContents from './DrawerContents';
import Welcome from './Welcome';

function renderNavigationView() {
  return <DrawerContents />;
}

export default () => (
  <Drawer
    statusBarBackgroundColor="blue"
    renderNavigationView={renderNavigationView}
    drawerWidth={300}
  >
    <Route exact path="/" component={Welcome} />
  </Drawer>
);
