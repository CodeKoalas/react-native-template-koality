import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AndroidBackButton } from 'react-router-native';

import store from '../redux/store';
import RootContainer from './RootContainer';
import history from '../redux/history';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AndroidBackButton>
        <RootContainer />
      </AndroidBackButton>
    </ConnectedRouter>
  </Provider>
);
