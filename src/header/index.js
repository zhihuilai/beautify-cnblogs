import $ from 'jquery';

const $blogStatus = $('.blogStats');
const $blogTitle = $('#blogTitle');

$blogTitle.append($blogStatus); // 随笔个数从右边换到左边
