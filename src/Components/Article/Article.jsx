const Article = ({ article, image, link }) => {

    // Individually mapped article
    return (
        <article className="flex h-[300px] w-[300px] border-solid border-[16px] border-transparent hover:border-red-500">
            <a href={link} target='_' className="w-[268px] h-[268px]">
                <div className="flex justify-center w-[268px]">
                    <img src={image} alt='' className="absolute object-contain h-[268px] w-[268px] brightness-[0.9] hover:brightness-[1.1]" />
                </div>
            </a>
        </article>
    )
}

export default Article;