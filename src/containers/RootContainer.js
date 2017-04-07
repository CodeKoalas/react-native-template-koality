import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-native';
import styled from 'styled-components/native';

import MainScreen from './MainScreen';
import Settings from './Settings';
import Login from './Login';
import ProtectedRoute from '../components/ProtectedRoute';

const Loading = styled.ActivityIndicator`

`;

const RootContainer = ({ user, hydration, route }) => {
  if (!hydration) {
    return <Loading />;
  }
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/settings" component={Settings} auth={!!user} />
      <Route path="*" component={MainScreen} auth={!!user} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  hydration: state.hydration,
  route: state.router,
});

export default withRouter(connect(mapStateToProps, null)(RootContainer));
