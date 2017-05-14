/**
 * Created by marno on 2017/4/6
 * Function:所有图片入口
 * Desc:将图片统一管理，避免因改变路径后导致图片引用维护困难
 */
const images = {
    /**
     * 通用图标
     */
    ic_logo: require('./imgs/launcher.png'),
    ic_avatar: require('./imgs/avatar.jpg'),
    ic_back:require('./imgs/back.png'),

    /**
     * 主页图标
     */
    ic_menu: require('./imgs/menu.png'),
    ic_notification: require('./imgs/notifications.png'),
    ic_locate: require('./imgs/locate.png'),
    ic_ridenow: require('./imgs/ridenow.png'),
    ic_report: require('./imgs/report.png'),

    /**
     * 个人中心
     */
    ic_receipt: require('./imgs/receipt.png'),
    ic_wallet: require('./imgs/wallet.png'),
    ic_redeem: require('./imgs/redeem.png'),
    ic_share: require('./imgs/share.png'),
    ic_help: require('./imgs/help.png'),
    ic_about: require('./imgs/info.png'),
    ic_label: require('./imgs/badgeRealYellow.png'),
    img_activities:require('./imgs/activities.png'),

    /**
     * 扫码页面
     */
    ic_light_off:require('./imgs/scanLigtOff.png'),
    ic_light_on:require('./imgs/scanLightOn.png'),
    ic_manual_input:require('./imgs/manualInput.png'),
    ic_scan_bar: require('./imgs/scanBar.png'),
};

export default images;