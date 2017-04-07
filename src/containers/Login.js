import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Redirect } from 'react-router-native';
import api from '../api/api';
import userActions from '../actions';

const login = userActions.user.login;

const LoginButton = styled.Button`
  color: red;
`;

const Container = styled.View`
  background-color: red;
`;

const Filler = styled.Text`
  
`;

class Login extends Component {
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

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  login: (user) => {
    dispatch(login(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
