function TechItem({ image, title }) {

    // original styles for reference:
    // w-[30px] 1sm:w-[40px] 2lg:w-[50px] xl:w-[70px]

    return <img
        src={image}
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