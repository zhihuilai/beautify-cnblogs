import { insertIcon } from '../../icon/index';
import './post-end.scss';
import $ from 'jquery';
import { isDomNodeRender } from '@/utils';

const adjustRecommendAndPostInfo = () => {
    insertIcon('guanzhu', '#green_channel_follow');
    insertIcon('shoucang', '#green_channel_favorite');
    insertIcon('like', '#digg_count');
    insertIcon('dislike', '#bury_count');

    const $diggDiv = $('#div_digg');
    const $author = $('#author_profile');
    const $greenChannel = $('#green_channel');
    $greenChannel.prepend($diggDiv).prepend($author);
};

isDomNodeRender('#green_channel', adjustRecommendAndPostInfo);
