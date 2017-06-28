
'use strict';

import React, {Component, PropTypes} from 'react';
import {View, ScrollView} from 'react-native';

import {
    Theme,
    NavigationPage,
    BasePage,
    NavigationBar,
    Label,
    Text,
    Carousel,
    ListRow,
    SegmentedBar,
    SegmentedView
} from 'teaset';


export default class SegmentedBarPage extends NavigationPage {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: '分段切换',
        showBackButton: true,
    };

    constructor(props) {
        super(props);
        console.log(this.state)
    }
    onCarouselChange(index) {
        index !== this.state.activeIndex && this.setState({activeIndex: index});
    }
    onSegmentedBarChange(index) {
        if (index !==this.state.activeIndex) {
            this.setState({activeIndex: index});
            if (this.refs.carousel) {
                this.refs.carousel.scrollToPage(index, false);
            }
        }
    }
    renderPage() {
        return (
            <ScrollView style={{flex: 1}}>
                <SegmentedBar justifyItem='scrollable'>
                    <SegmentedBar.Item title='Apple'/>
                    <SegmentedBar.Item title='Banana'/>
                    <SegmentedBar.Item title='Cherry'/>
                    <SegmentedBar.Item title='Durian'/>
                    <SegmentedBar.Item title='Filbert'/>
                    <SegmentedBar.Item title='Grape'/>
                    <SegmentedBar.Item title='Hickory'/>
                    <SegmentedBar.Item title='Lemon'/>
                    <SegmentedBar.Item title='Mango'/>
                </SegmentedBar>
                <View style={{height: 20}}/>

                <SegmentedView style={{flex: 1}} type='projector' onChange={index => this.onSegmentedBarChange(index)}>
                    <SegmentedView.Sheet title='one'>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Label type='detail' size='xl' text='one'/>
                        </View>
                    </SegmentedView.Sheet>
                    <SegmentedView.Sheet title='two'>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Label type='detail' size='xl' text='two'/>
                        </View>
                    </SegmentedView.Sheet>
                    <SegmentedView.Sheet title='three'>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Label type='detail' size='xl' text='three'/>
                        </View>
                    </SegmentedView.Sheet>
                </SegmentedView>

                <View style={{height: 20}}/>
                <View style={{flex: 1}}>
                    <Carousel
                        style={{
                            backgroundColor: Theme.defaultColor,
                            height: 238,
                            borderTopWidth: 1,
                            borderTopColor: Theme.pageColor
                        }}
                        carousel={false}
                        startIndex={this.state.activeIndex}
                        cycle={false}
                        ref='carousel'
                        onChange={index => this.onCarouselChange(index)}
                    >
                        <View key={'view' + 1} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Label type='detail' size='xl' text={1}/>
                        </View>
                        <View key={'view' + 1} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Label type='detail' size='xl' text={2}/>
                        </View>
                        <View key={'view' + 1} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Label type='detail' size='xl' text={3}/>
                        </View>
                    </Carousel>
                </View>

            </ScrollView>



        );
    }

}
