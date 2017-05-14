/**
 * Created by marno on 2017/4/10
 * Function:侧滑菜单中的条目组件
 * Desc:
 */
import React, {Component} from 'react';
import {TouchableWithoutFeedback, View, Text, Image, StyleSheet} from 'react-native';

export default class ProfileItem extends Component {
    render() {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.view_container}>
                    <Image
                        style={styles.image_icon}
                        source={this.props.source}/>
                    <Text
                        style={styles.text_title}
                    >{this.props.title}</Text>
                    <Text
                        style={styles.text_content}
                    >{this.props.content}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    view_container: {
        flex: 1,
        flexDirection:'row',
        padding:16,
    },
    text_title: {
        color: '#433C2C',

    },
    text_content: {
        color: '#433C2C',
        flexGrow:1,
        textAlign:'right'
    },
    image_icon: {
        height: 24,
        width: 24,
        marginRight:30,
    }
})