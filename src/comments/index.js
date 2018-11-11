import { insertIcon } from '@/icon';
import $ from 'jquery';
import './comments.scss';
import { isDomNodeRender } from '@/utils';

// 头像
function showAvatar() {
    const $commentVotes = $('.comment_vote');
    $commentVotes.each((index, commentVote) => {
        const $avatarSpan = $(commentVote).next();
        const image = document.createElement('img');
        let avatarUrl = 'http://pic.cnitblog.com/face/sample_face.gif';
        console.log($avatarSpan);
        if ($avatarSpan.length !== 0) {
            avatarUrl = $avatarSpan.html();
        }
        image.src = avatarUrl;
        image.setAttribute('class', 'custom-avatar');
        $(commentVote)
            .parent()
            .parent()
            .find('.feedbackListSubtitle')
            .prepend(image);
    });
}

isDomNodeRender('.comment_vote', () => {
    insertIcon('message', '.sendMsg2This');
    showAvatar();
});
