export default function ResourceList({ array, className, children, ...rest }) {

    return (

        <div className={`${className || ''}`} {...rest}>
            <ul className={`flex flex-col`}>
                {array.map((resource) => {
                    return (
                        <li className={`flex flex-col gap-2 items-stretch`}
                            key={resource.id}>
                            <ResourceItem
                                props={resource}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>

    );
}

function ResourceItem({ className, props, ...rest }) {
    const { date, title, url, source } = props;
    return (

        <p className={`${className || ''}`}
            {...rest}
        >
            <span>{date}:</span> "{title}" [<a href={url}>{source}</a>]
        </p>

    );
}
