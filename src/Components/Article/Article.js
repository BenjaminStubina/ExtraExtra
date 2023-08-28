const Article = ({ article, image, link }) => {
    return (
        <div className="flex h-[304px] border-solid border-2">
            <a href={link} target='_'>
                <div className="flex w-full self-center justify-center">
                    <img src={image} />
                </div>
            </a>
        </div>
    )
}

export default Article;