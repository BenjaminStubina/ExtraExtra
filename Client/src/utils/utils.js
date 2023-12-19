export const caption = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facere autem soluta, esse, a deleniti laboriosam et sint at error vel voluptatibus mollitia, temporibus repudiandae amet accusantium laborum. Nobis, inventore!
Quia minima tempora asperiores cum ipsum aliquam maxime! Architecto ipsum qui esse iste placeat quia. Nesciunt aspernatur laboriosam officiis neque ducimus deserunt corporis quas, ex voluptates quibusdam quidem, blanditiis voluptas?
Doloremque illo nulla id, eveniet iusto amet nisi fugiat veniam placeat, porro deleniti nobis, eaque quae autem ea adipisci facilis vero minima atque ducimus ut ad. Repellendus, sit? Repellendus, suscipit!
Quidem, corporis vel. Suscipit pariatur incidunt eveniet, iste voluptates aperiam quos harum ipsum ad quas sequi impedit earum ab illo. Inventore cupiditate ad ullam eligendi repellat sit, ducimus perferendis omnis.
Veritatis molestias excepturi voluptas voluptatum voluptatem corporis nihil sapiente ullam ab error accusantium nostrum, tempora repudiandae corrupti aliquid, minus rem aliquam! Ea ratione sed doloremque nulla qui optio sapiente quod.`;

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
    return new Date(seconds * 1000).toDateString();
}