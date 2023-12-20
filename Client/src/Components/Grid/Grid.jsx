const Grid = ({ className, children, ...rest }) => {

    return (
        <section
            className={`grid md:gap-2 lg:gap-3 xl:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${className || ''}`}
            {...rest}
        >
            {children}
        </section>
    );
};

export default Grid;