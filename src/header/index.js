import './header.scss';
import { insertIcon } from '../icon';
import $ from 'jquery';

insertIcon('weibiaoti16', '#blog_nav_sitehome');
insertIcon('shouye', '#blog_nav_myhome');
insertIcon('Edit', '#blog_nav_newpost');
insertIcon('lianxiren', '#blog_nav_contact');
insertIcon('dingyue', '#blog_nav_rss');
insertIcon('guanlishebei', '#blog_nav_admin');

const $blogStatus = $('.blogStats');
const $blogTitle = $('#blogTitle');

$blogTitle.append($blogStatus); // 随笔个数从右边换到左边
