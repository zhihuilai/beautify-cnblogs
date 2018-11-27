import $ from 'jquery';
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';
import './style/post-body.scss';

$('.postBody a').attr('target', '_blank');
const postBody = $('.blogpost-body')[0];
if (postBody) {
    new Viewer(postBody);
}
