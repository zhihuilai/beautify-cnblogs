import $ from 'jquery';
import './style.scss';
import 'promise-polyfill';
import './icon/iconfont'; // 插入图标初始化文件
import './header'; // header 的 js
import './post';
import './comments';
import './ad&news';
import './sidebar';
import './footer';
import './@media';
import './list';

const detectMobile = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').removeClass('not-mobile-device').addClass('mobile-device');
    } else {
        $('body').removeClass('mobile-device').addClass('not-mobile-device');
    }
};

detectMobile();
window.addEventListener('resize', detectMobile);
