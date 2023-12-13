import ArticleList from '../ArticleList/ArticleList';

const Grid = ({ activeSource }) => {

    return (
        // prev <section> styles:
        //"w-[100%] max-w-[1000px] flex-grow px-[20px] mb-4"
        <section className="">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ArticleList activeSource={activeSource} />
            </div>
        </section>
    );
};

export default Grid;