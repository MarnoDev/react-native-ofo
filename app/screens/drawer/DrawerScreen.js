/**
 * Created by marno on 2017/4/7
 * Function:侧滑菜单视图
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableWithoutFeedback} from "react-native";

import {Colors, Images, Constants} from '../../resource/'
import {ProfileItem,ImageButton}from "../../components/";
import Styles from "./styles/DrawerScreenStyles";

export default class DrawerScreen extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor: Colors.white_fff}}>
                <ScrollView >
                    <TouchableWithoutFeedback>
                        <View style={Styles.view_drawer_header}>
                            <View style={Styles.view_avatar}>
                                <Image
                                    style={Styles.image_avatar}
                                    source={Images.ic_avatar}
                                />
                                <Image
                                    style={Styles.image_label}
                                    source={Images.ic_label}
                                >
                                    <Text
                                        style={Styles.text_label}
                                    >{Constants.string_already_verify}</Text>
                                </Image>
                            </View>
                            <View style={Styles.view_name}>
                                <Text
                                    style={Styles.text_nickname}
                                >Marno</Text>
                                <Text
                                    style={Styles.text_account}
                                >公众号 aMarno</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <ProfileItem
                        source={Images.ic_receipt}
                        title={Constants.string_profile_item_receipt}
                    />
                    <ProfileItem
                        source={Images.ic_wallet}
                        title={Constants.string_profile_item_wallet}
                        content="￥90"
                    />
                    <ProfileItem
                        source={Images.ic_redeem}
                        title={Constants.string_profile_item_redeem}
                    />
                    <ProfileItem
                        source={Images.ic_share}
                        title={Constants.string_profile_item_share}
                    />
                    <ProfileItem
                        source={Images.ic_help}
                        title={Constants.string_profile_item_help}
                    />
                    <ProfileItem
                        source={Images.ic_about}
                        title={Constants.string_profile_item_about}
                    />
                    <ImageButton
                        style={Styles.image_activities}
                        source={Images.img_activities}/>
                </ScrollView>
            </View>
        )
    }


}