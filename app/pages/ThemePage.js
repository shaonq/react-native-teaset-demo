
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

  renderPage() {
    return (
        <View style={{flex: 1}}>

        </View>
    );
  }

}
