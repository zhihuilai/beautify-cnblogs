import $ from 'jquery';

export const DEST = {
    PREPEND: 0,
    APPEND: 1,
};

export const insertIcon = (iconName, selector, dest = DEST.PREPEND) => {
    const svg = `<svg class="icon icon-${iconName}" aria-hidden="true"><use xlink:href="#icon-${iconName}"></use></svg>`;
    const $parent = $(selector);
    if (dest === DEST.PREPEND) {
        $parent.prepend(svg);
    } else if (dest === DEST.APPEND) {
        $parent.append(svg);
    } else {
        throw new Error(
            'parameter error: dest must be one of DEST.PREPEND or DEST.APPEND, default is DEST.PREPEND.'
        );
    }
};
