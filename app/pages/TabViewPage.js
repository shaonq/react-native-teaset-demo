/**
 * Created by wangmi on 2017/6/26.
 */
// Home.js

'use strict';

import React, {Component, PropTypes} from 'react';
import {View,Text, ScrollView} from 'react-native';

import {Theme, NavigationPage, NavigationBar,BasePage,Label, ListRow,SegmentedBar,SegmentedView,TabView} from 'teaset';

import Home from './Home';

export default class TabViewPage extends BasePage {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: '分段切换',
        showBackButton: true,
    };
    constructor(props) {
        super(props);
        console.log(this.state)
    }
    renderPage() {
        return (
            <TabView style={{flex: 1}} type='projector'>
                <TabView.Sheet
                    title='Home'
                    // icon={require('../icons/home.png')}
                    // activeIcon={require('../icons/home_active.png')}
                >
                    <View style={{flex: 1}}>
                        <ListRow title='首页' detail='Home' onPress={() => this.navigator.push({view: <Home /> })} />
                    </View>
                </TabView.Sheet>
                <TabView.Sheet
                    title='Me'
                    // icon={require('../icons/me.png')}
                    // activeIcon={require('../icons/me_active.png')}
                    badge={1}
                >
                    <View style={{flex: 1}}>
                        <Text> 2</Text>
                    </View>
                </TabView.Sheet>
            </TabView>        );
    }

}
