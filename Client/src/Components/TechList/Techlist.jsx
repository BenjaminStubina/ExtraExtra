function TechItem({ image, title }) {
    return <img
        src={image}
        // title={title}
        alt={title}
        className="w-12" />;
};

export default function TechList({ array, children, ...rest }) {

    return (
        <div {...rest}>

            <h3 className=''>{children}</h3>
            <ul className="w-full flex flex-wrap gap-2">

                {array.map((tech) => {
                    return (
                        <li
                            className="w-1/4"
                            key={tech.tech}
                        >
                            <TechItem
                                image={tech.image}
                                title={tech.title}
                            />
                        </li>
                    );
                })}

            </ul>
        </div>
    );
};