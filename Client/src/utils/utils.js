import { pubs as pubArray } from "./constants";

export const caption = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facere autem soluta, esse, a deleniti laboriosam et sint at error vel voluptatibus mollitia, temporibus repudiandae amet accusantium laborum. Nobis, inventore!
Quia minima tempora asperiores cum ipsum aliquam maxime! Architecto ipsum qui esse iste placeat quia. Nesciunt aspernatur laboriosam officiis neque ducimus deserunt corporis quas, ex voluptates quibusdam quidem, blanditiis voluptas?`;

export function shortenCaption(caption, maxLength = 150) {

    if (typeof caption !== 'string') { throw new Error('Caption must be a string.'); }

    if (caption.length <= maxLength && !caption.includes('\n')) {
        return caption;
    }

    let short = caption.slice(0, maxLength - 1);

    short = short.slice(0, Math.max(
        short.lastIndexOf('\n') - 2,
        short.lastIndexOf('?'),
        short.lastIndexOf('!'),
        short.lastIndexOf(' ')
    ));

    return short.trim() + '…';

};

export function stripLink(url) {
    if (typeof url !== 'string') { throw new Error('URL must be a string.'); }
    const i = url.indexOf('?');
    return i !== -1 ? url.substring(0, i) : url;
}

export function secondsToDate(seconds) {
    // return new Date(seconds * 1000).toDateString();

    const now = new Date();
    const date = new Date(seconds * 1000);
    const diff = Math.floor((now - date) / 1000);

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);


    if (diff < 120) {
        return 'Just now';
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 86400) {
        // if (date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear()) {
        //     return 'Yesterday';
        //     // Alternatively, use the following line to show the date for yesterday
        //     // return `${date.toLocaleString('en-us', { month: 'short' })} ${date.getDate()}`;
        // }
        // return `${Math.floor(diff / 3600)} hours ago`;
        return Math.floor(diff / 3600) === 1 ? '1 hour ago' : `${Math.floor(diff / 3600)} hours ago`;

    } else {
        return `${date.toLocaleString('en-us', { month: 'short' })} ${date.getDate().toString()}`;
    }

}

export function getTitle(article) {
    const pub = article.source_id
        ? pubArray.find(pub => pub.id === article.source_id)
        : pubArray.find(pub => pub.publication === article.publication);
    return pub ? pub.title : undefined;
}
