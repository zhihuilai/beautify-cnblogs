import $ from 'jquery';

/**
 * 某些 dom 不随着 html 请求返回，而是动态渲染，这里检测什么时候渲染，渲染好的时候就调用 callback
 * @param selector - css 选择器，依赖 jquery
 * @param callback
 */
export const isDomNodeRender = (selector, callback) => {
    const intervalId = setInterval(() => {
        if ($(selector).length !== 0) {
            clearInterval(intervalId);
            callback();
        }
    }, 100);
};

// https://stackoverflow.com/a/5379408
export const getSelectionText = () => {
    let text = '';
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== 'Control') {
        text = document.selection.createRange().text;
    }
    return text;
};

// https://stackoverflow.com/a/5222955
export const getSelectionHtml = () => {
    let html = '';
    if (typeof window.getSelection !== 'undefined') {
        const sel = window.getSelection();
        if (sel.rangeCount) {
            const container = document.createElement('div');
            for (let i = 0, len = sel.rangeCount; i < len; i += 1) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection !== 'undefined') {
        if (document.selection.type === 'Text') {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
};
