import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import api from '../api/api';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`;

const PhotoItem = styled.Image`
  height: 480;
  width: 640;
`;

export default class Welcome extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    api.getPhotos().then(photos =>
      this.setState({
        photos,
      }));
  }

  renderItem = ({ item }) => <PhotoItem source={{ uri: item.photo }} />;

  render() {
    return (
      <Container>
        <Instructions>Koality Picker</Instructions>
        <FlatList
          data={this.state.photos}
          renderItem={this.renderItem}
          resizeMode="contain"
        />
      </Container>
    );
  }
}
