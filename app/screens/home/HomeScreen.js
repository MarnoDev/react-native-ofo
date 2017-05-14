/**
 * Created by marno on 2017/4/9
 * Function:主页视图
 * Desc:
 */
import React, {Component} from "react";
import {Image, Text, TouchableWithoutFeedback, View, WebView} from "react-native";

import {Container, Drawer} from "native-base";
import Toast from 'react-native-simple-toast';

import {Constants, Images} from "../../resource/";
import Styles from "./styles/HomeScreenStyles";

import {TitleBar, ImageButton} from '../../components/'
import DrawerScreen from "../drawer/DrawerScreen";

export default class HomeScreen extends Component {
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<DrawerScreen />}
            >
                <Container>
                    <TitleBar
                        title={Constants.string_title_homeScreen}
                        leftIcon={Images.ic_menu}
                        rightIcon={Images.ic_notification}
                        leftIconPress={() => {
                            this._openDrawer();
                        }}
                        rightIconPress={() => {
                            this._navigateToScreen('Notification');
                        }}
                    />
                    <View style={Styles.view_container}>
                        <WebView
                            style={{flex: 1}}
                            source={Constants.amap_path}
                            domStorageEnabled={true}
                            javaScriptEnabled={true}
                            startInLoadingState={true}
                        />
                        <View style={Styles.view_bottom_menu_container}>
                            <View style={Styles.view_locate_button_bg}>
                                <ImageButton
                                    style={Styles.image_locate_button}
                                    source={Images.ic_locate}
                                    onPress={this._getLocation.bind(this)}
                                />
                            </View>

                            <ImageButton
                                style={Styles.image_ridenow_button}
                                source={Images.ic_ridenow}
                                onPress={this._navigateToScanner.bind(this)}
                            >
                                <Text
                                    onPress={this._navigateToScanner.bind(this)}
                                    style={Styles.text_ridenow_title}>立即用车</Text>
                            </ImageButton>

                            <ImageButton
                                style={Styles.image_report_button}
                                source={Images.ic_report}
                            />
                        </View>
                    </View>
                </Container>
            </Drawer>
        );
    }

    _getLocation() {
        Toast.show('点击了定位');
    }

    _navigateToScreen(screen) {
        const {navigate} = this.props.navigation;
        navigate(screen);
    }

    _openDrawer() {
        this._drawer._root.open();
    }

    _navigateToScanner() {
        this._navigateToScreen('Scanner')
    }

}

