/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TeaNavigator} from 'teaset';
import Home from './app/pages/Home'

export default class notes extends Component {
  render() {
      return <TeaNavigator rootView={<Home />} />;
  }
}

AppRegistry.registerComponent('notes', () => notes);
