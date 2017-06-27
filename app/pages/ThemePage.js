// ThemeExample.js

'use strict';

import React, {Component, PropTypes} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';

import {Theme, NavigationPage, ListRow, PullPicker} from 'teaset';

export default class ThemePage extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'ThemeComponent',
    showBackButton: true,
  };

  changeTheme() {
    PullPicker.show(
      'Select theme',
      Object.keys(Theme.themes),
      -1,
      (item, index) => {
        Theme.set(Theme.themes[item]);
        this.navigator.popToTop();
      }
    );
  }

  renderPage() {
    return (
        <ScrollView style={{flex: 1}}>

        </ScrollView>
    );
  }

}
