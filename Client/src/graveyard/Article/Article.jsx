

const Article = ({ article, image, link }) => {
    // Individually mapped article
    return (
        <article className="flex h-72 w-72 border-8 border-transparent md:hover:border-red-500 rounded overflow-hidden">
            <a href={link} target='_blank' rel="noopener noreferrer" className="relative w-full h-full">
                <img src={image} alt='' className="object-cover object-center h-full w-full Xbrightness-[0.9]  transition duration-300 ease-in-out Xhover:brightness-110" />
                <p className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white text-center opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-75 p-2'>sup</p>
            </a>
        </article>
    );
};

export default Article;