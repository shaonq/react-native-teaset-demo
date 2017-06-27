/**
 * Created by wangmi on 2017/6/26.
 */
// Home.js

'use strict';

import React, {Component, PropTypes} from 'react';
import {View, ScrollView} from 'react-native';

import {Label, Input, Select, Button, Checkbox, Stepper, Badge, NavigationPage, NavigationBar, ListRow} from 'teaset';


export default class FomrPage extends NavigationPage {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: '表单',
        showBackButton: true,
    };

    constructor(props) {
        super(props);
        Object.assign(this.state, {
            inputValue: 'input',
            selectValue: '不明',
            checked: true
        });
    }

    renderPage() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <ListRow title='Text' detail={<Label text='text'/>} topSeparator='full'/>
                    <ListRow title={this.state.inputValue} detail={
                        <Input style={{width: 200}} size='sm' value={this.state.inputValue}
                               onChangeText={text => this.setState({inputValue: text})}/>
                    }/>
                    <ListRow title={this.state.selectValue} detail={
                        <Select
                            style={{width: 200}}
                            value={this.state.selectValue}
                            items={['男', '女', '不明']}
                            placeholder='选择性别'
                            pickerTitle='请选择性别'
                            onSelected={(value, index) => this.setState({selectValue: value})}
                        />
                    }/>
                    <ListRow title={this.state.checked ? "选中了" : "快选我"} detail={
                        <Checkbox
                            title='你好吗'
                            checked={this.state.checked}
                            onChange={checked => this.setState({checked})}
                        />
                    }/>
                    <ListRow title="计步器" detail={
                        <Stepper
                            defaultValue={0.8}
                            step={0.005}
                            valueFormat={v => (v * 100).toFixed(1) + '%'}
                            valueStyle={{minWidth: 60}}
                        />
                    }/>
                    <ListRow title="更新" detail={
                        <Badge type='dot'/>
                    }/>
                    <ListRow detail={
                        <Button style={{flex: 1}} type='primary' title='提 交'/>
                    }/>

                    <View style={{padding: 20, flex: 1}}>
                        <Label style={{fontFamily: "Consolas", fontSize: 12}} numberOfLines={5}
                               text={JSON.stringify(this.state)}/>
                    </View>
                </View>
            </ScrollView>
        );
    }

}
