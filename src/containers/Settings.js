import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { withRouter } from 'react-router-native';

import userActions from '../actions';

const update = userActions.user.update;

const Container = styled.View`
  margin: 10;
`;

const Header = styled.Text``;

const EditField = styled.TextInput``;

const EditFieldHeader = styled.Text``;

const EditButton = styled.Button``;

class Settings extends Component {
  state = {
    user: this.props.user,
    edit: false,
  };

  onPress = () => {
    if (this.state.edit) {
      this.props.updateUser(this.state.user);
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
  };

  onChangeFirstName = (firstName) => {
    this.setState((state) => {
      const user = Object.assign({}, state.user, { firstName });
      return {
        user,
      };
    });
  };

  onChangeLastName = (lastName) => {
    this.setState((state) => {
      const user = Object.assign({}, state.user, { lastName });
      return {
        user,
      };
    });
  };

  getButtonTitle = () => {
    if (this.state.edit) {
      return 'Save';
    }
    return 'Edit';
  };

  render() {
    return (
      <Container>
        <Header>{this.state.user.username}</Header>
        <EditFieldHeader>First Name</EditFieldHeader>
        <EditField
          editable={this.state.edit}
          value={this.state.user.firstName}
          onChangeText={this.onChangeFirstName}
        />
        <EditFieldHeader>Last Name</EditFieldHeader>
        <EditField
          editable={this.state.edit}
          value={this.state.user.lastName}
          onChangeText={this.onChangeLastName}
        />
        <EditButton title={this.getButtonTitle()} onPress={this.onPress} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => {
    dispatch(update(user));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
