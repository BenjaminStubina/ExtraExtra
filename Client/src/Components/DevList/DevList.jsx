import SocialLink from '../SocialLink/SocialLink';

function DevItem({ name, services }) {

    return (
        <>
            <p>{name}</p>
            {services.map(service => (
                <SocialLink
                    key={`${name}-${service.type}`}
                    service={service.type}
                    identifier={service.identifier}
                />
            ))}
        </>
    );
}

export default function DevList({ array, children, ...rest }) {
    return (
        <div {...rest}>

            <h3 className=''>{children}</h3>
            <ul className='flex flex-col gap-4 md:flex-row md:gap-8'>

                {array.map(dev => {
                    return (
                        <li
                            className="flex flex-col gap-4"
                            key={dev.id}
                        >
                            <DevItem
                                name={dev.name}
                                services={dev.services}
                            />
                        </li>
                    );
                })}

            </ul>
        </div>
    );
}