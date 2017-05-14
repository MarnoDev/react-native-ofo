/**
 * Created by marno on 2017/4/9
 * Function: 主页面 HomeScreen 中用到的样式
 * Desc:
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../../../resource/';

export default StyleSheet.create({
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
    view_container: {
        flex: 1,
        flexDirection: 'column',
    },
    view_bottom_menu_container: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 116,
        paddingBottom: 16,
    },
    view_locate_button_bg: {
        backgroundColor: Colors.white_fff,
        height: 48,
        width: 48,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        elevation: 3,
    },
    image_locate_button: {
        height: 24,
        width: 24,
    },
    image_ridenow_button: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_ridenow_title: {
        color: Colors.yellow_FFD900,
        fontSize: 16,
        fontWeight: 'bold'
    },
    image_report_button: {
        height: 56,
        width: 56,
        marginRight: 16
    }

});