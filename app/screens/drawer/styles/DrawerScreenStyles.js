/**
 * Created by marno on 2017/4/10
 * Function:侧滑菜单样式
 * Desc:
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../../../resource/'

export default StyleSheet.create({
    view_drawer_header: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.gray_e9e9e9,
        margin: 16,
        paddingBottom: 16,
    },
    view_avatar: {
        alignItems: 'center',
    },
    view_name: {
        justifyContent:'center',
        marginLeft:16,
    },
    image_label: {
        width: 66,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: -18
    },
    image_avatar: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    text_label: {
        position: 'absolute',
        bottom: 21,
        right: 8,
        fontSize: 10,
    },
    text_nickname: {
        fontSize: 16,
    },
    text_account: {
        fontSize:14,
    },
    image_activities:{
        resizeMode:'contain',
        width:280,
        height:160,
    }

});
