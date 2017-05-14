/**
 * Created by marno on 2017/4/9
 * Func: 顶部标题栏
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, Text} from 'react-native';

import {Body, Header, Left, Right, Title} from "native-base";

import {Images} from '../resource/'
import ImageButton from "./ImageButton";


export default class TitleBar extends Component {

    static propTypes = {
        leftIcon: React.PropTypes.number,
        rightIcon: React.PropTypes.number,
        rightTitle: React.PropTypes.string,
        leftIconPress: React.PropTypes.func,
        rightIconPress: React.PropTypes.func,
    };

    static defaultProps = {
        leftIcon: Images.ic_back,
    };

    render() {
        return (
            <Header style={{backgroundColor: '#fff'}}>
                <Left>
                    <ImageButton
                        style={styles.image_header_left}
                        source={this.props.leftIcon}
                        onPress={this.props.leftIconPress}
                    />
                </Left>
                <Body>
                <Title
                    style={{color: '#000'}}
                >{this.props.title}</Title>
                </Body>
                <Right>
                    {this._renderRight()}
                </Right>
            </Header>
        )
    }

    /**
     * 根据传入值判断右边渲染文字还是图标
     */
    _renderRight() {
        if (this.props.rightIcon) {
            return (  <ImageButton
                style={styles.image_header_right}
                source={this.props.rightIcon}
                onPress={this.props.rightIconPress}
            />)
        } else if (this.props.rightTitle) {
            return (
                <Text style={styles.text_right_title}>
                    {this.props.rightTitle}
                </Text>
            )
        }
    }

}

const styles = StyleSheet.create({
    image_header_left: {
        height: 24,
        width: 24,
        marginLeft: 8,
    },
    image_header_right: {
        height: 24,
        width: 24,
        marginRight: 8,
    },
    text_right_title:{
        color:'#000',
    }
})