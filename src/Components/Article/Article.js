const Article = ({ article, image, link }) => {
    return (
        <div className="flex h-[304px] border-solid border-2 hover:border-4 hover:border-red-500">
            <a href={link} target='_'>
                <div className="flex w-full self-center justify-center">
                    <img src={image} alt='' className="w-[300px] aspect-square" />
                </div>
            </a>
        </div>
    )
}

export default Article;