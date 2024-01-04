function TechItem({ image, title }) {

    // original styles for reference:
    // w-[30px] xs:w-[40px] lg:w-[50px] xl:w-[70px]

    return (
        <>
            <img
                src={image}
                alt={title}
                className={`w-12 mt-auto self-center`} />
            <p className={`mt-auto self-center`}>{title}</p>
        </>
    );
};

export default function TechList({ array, children, ...rest }) {

    return (
        <div {...rest}>
            {children}
            <ul className={`flex justify-evenly`}>

                {array.map((tech) => {
                    return (
                        <li
                            className={`flex flex-col gap-2 items-stretch`}
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