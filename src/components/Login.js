import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Redirect } from 'react-router-native';
import api from '../api/api';

const LoginButton = styled.Button`
  color: red;
`;

const Container = styled.View`
  background-color: red;
`;

const Filler = styled.Text`
  
`;

export default class Login extends Component {
  handlePress = () => {
    api.login().then(user => this.props.login(user));
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.user) {
      return <Redirect to={from} />;
    }
    return (
      <Container>
        <Filler>Hello world</Filler>
        <LoginButton title="Click me" onPress={this.handlePress} />
      </Container>
    );
  }
}
