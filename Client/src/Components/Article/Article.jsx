const Article = ({ article, image, link }) => {

    // Individually mapped article
    return (
        <article className="flex h-[300px] w-[300px] border-solid border-[8px] border-transparent md:hover:border-red-500">
            <a href={link} target='_' className="w-[284px] h-[284px]">
                <div className="flex justify-center w-[284px]">
                    <img src={image} alt='' className="absolute object-contain h-[284px] w-[284px] brightness-[0.9] hover:brightness-[1.1]" />
                </div>
            </a>
        </article>
    )
}

export default Article;