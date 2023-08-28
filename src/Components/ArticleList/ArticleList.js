import Global from '../../Assets/Data/Global.json';
import Article from '../Article/Article';

const ArticleList = () => {

    const articles = Global.linkinbio_posts;
    
    return (
        <>
            {articles.map((article) => {
                return (
                    <Article
                    key={article.id}
                    link={article.link_url}
                    image={article.image_url}
                    article={article}
                    />
                )
            })}
        </>
    )
}

export default ArticleList;