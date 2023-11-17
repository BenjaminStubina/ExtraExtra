import './Grid.scss';
import ArticleList from '../ArticleList/ArticleList';

const Grid = ({ activeSource }) => {

    return (
        <section className="w-[100%] max-w-[1000px] flex-grow px-[20px] mb-4">
            <div className="grid grid-props gap-3 justify-center">
                <ArticleList activeSource={activeSource} />
            </div>
        </section>
    )
}

export default Grid;