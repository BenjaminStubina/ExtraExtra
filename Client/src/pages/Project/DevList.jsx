import SocialLink from "../../components/ui/SocialLink";

export default function DevList({ array, children, ...rest }) {
    return (
        <div {...rest}>

            {children}
            <ul className={`flex flex-wrap min-w-0 flex-col Xitems-center Xjustify-center gap-4 md:flex-row md:gap-8`}>

                {array.map(dev => {
                    return (
                        <li
                            className={`flex md:flex-col gap-4`}
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

function DevItem({ name, services }) {

    return (
        <>
            <p><strong>{name}</strong></p>
            <ul className={`w-full flex flex-col gap-3`}>
                {services.map(service => (
                    <li
                        key={`${name}-${service.type}`}
                    >
                        <SocialLink
                            service={service.type}
                            identifier={service.identifier}
                        />
                    </li>
                ))}

            </ul>
        </>
    );
}
