import $ from 'jquery';
import { isDomNodeRender } from '@/utils';
import { insertIcon } from '@/icon';
import './sidebar.scss';

const toggleSideBar = () => {
    $('body').toggleClass('side-bar-show');
};

$('#side-bar-trigger').click(toggleSideBar);

$('#sideBar').click(toggleSideBar);

$('#sideBarMain').click((e) => {
    e.stopPropagation();
});

insertIcon('plus', '#side-bar-trigger');

isDomNodeRender('#sidebar_categories', () => {
    // 博客园搞错了这个 dom 下的 sidebar-block 的层级
    $('#sidebar_categories').addClass('sidebar-block');
    $('#sidebar_postarchive').removeClass('sidebar-block');
});
