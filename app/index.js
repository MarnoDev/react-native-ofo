/**
 * Created by marno on 2017/3/30
 * Function: 程序主入口
 * Desc: 在这里做一些全局配置，比如全局 Navigator配置，全局变量初始化等。
 */
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/home/HomeScreen';
import DrawerScreen from './screens/drawer/DrawerScreen';
import NotificationScreen from './screens/notification/NotificationScreen';
import QRScannerScreen from "./screens/scanner/QRScannerScreen";

const App = StackNavigator({
        Main: {screen: HomeScreen},
        Drawer: {screen: DrawerScreen},
        Notification: {screen: NotificationScreen},
        Scanner:{screen:QRScannerScreen}
    }, {
        headerMode: 'none',
    }
);


//如果使用template 创建，需要将‘MarnoRN’替换成你自己项目的名称
AppRegistry.registerComponent('RNofo', () => App);