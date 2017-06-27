/**
 * Created by wangmi on 2017/6/26.
 */

'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, ScrollView} from 'react-native';

import {Theme, NavigationPage, NavigationBar, ListRow} from 'teaset';


export default class AboutPage extends NavigationPage {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: 'About',
        showBackButton: true,
    };

    constructor(props) {
        super(props);
        console.log(this.props);

        this._format = (time => {
            return time.toLocaleString()
        });

        Object.assign(this.state, {
            timerCount: this._format(new Date())
        });

        console.log(this.state);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
           if(this.state.isFocused) this.setState({
                timerCount: this._format(new Date())
            })
        }, 500)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    renderPage() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, padding: 30}}>
                    <Text numberOfLines={10} style={{lineHeight: 30}} >
                        这是一个简单的demo{'\n'}
                        {this.state.timerCount}
                    </Text>
                </View>
            </ScrollView>
        );
    }

}
