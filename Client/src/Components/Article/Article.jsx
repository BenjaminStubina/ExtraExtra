const Article = ({ article, image, link }) => {

    // Individually mapped article
    return (
        <article className="flex h-[300px] w-[300px] border-solid border-[8px] border-transparent md:hover:border-red-500 rounded">
            <a href={link} target='_' className="w-[284px] h-[284px]">
                <img src={image} alt='' className="object-cover object-center h-[284px] w-[284px] brightness-[0.9] hover:brightness-[1.1]" />
            </a>
        </article>
    );
};

export default Article;