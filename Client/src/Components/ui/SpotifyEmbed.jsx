
export default function SpotifyEmbed({ className, type, src, ...rest }) {

    return (

        <div
            className={`${className || ''}`}
            {...rest}
        >
            <iframe
                src={`https://open.spotify.com/embed/${type}/${src}`}
                width="100%"
                height="425"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            >
            </iframe>
        </div>

    );
}