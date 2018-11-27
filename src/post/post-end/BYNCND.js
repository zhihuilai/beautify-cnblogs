import $ from 'jquery';
import { blogUserName, blogUrl } from '@/../config/customfile';
import { getSelectionText, getSelectionHtml } from '@/utils';

const isNoAuth = $('noAuth').length === 1;
const $postBody = $('#cnblogs_post_body');
let authText;

if (!isNoAuth && $postBody.length === 1) {
    const byncndUrl = 'http://creativecommons.net.cn/licenses/meet-the-licenses/';
    const authHtml = `<a target="_blank" href="${blogUrl}">${blogUserName}</a> 的该篇文章受 “<a target="_blank" href="${byncndUrl}">创作共用版权协议</a>”（知识共享许可协议）保护，要求 署名-非商业使用-禁止演绎 (by-nc-nd)。在满足创作共用版权协议的基础上可以进行转载，但请以超链接形式注明出处并保留此段声明。`;
    $postBody.append('<p>本文声明：</p>');
    $postBody.append(`<blockquote class="post-auth"><p>${authHtml}</p></blockquote>`);
    authText = $('.post-auth').text();
    const postUrl = window.location.href;
    $postBody[0].addEventListener('copy', (e) => { // 如果复制没有包含 BYNCND 声明，则加上
        const selectionText = getSelectionText();
        const selectionHtml = getSelectionHtml();
        if (selectionText.replace(/ /g, '').indexOf(authText.replace(/ |\n/g, '')) === -1) {
            e.clipboardData.setData('text/plain', `${selectionText}\n\n【作者】：${blogUserName}\n【原文链接】：${postUrl}\n【文章声明】：${authText}\n【法律协议】：${byncndUrl}`);
            e.clipboardData.setData('text/html', `${selectionHtml}<br><br><strong>作者：</strong>${blogUserName}<br><strong>原文链接：</strong><a href="${postUrl}">${postUrl}</a><br><strong>文章声明：</strong>${authHtml}`);
            e.preventDefault();
        }
    });
}
