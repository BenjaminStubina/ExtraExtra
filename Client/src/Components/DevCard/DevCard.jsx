import SocialLink from '../SocialLink/SocialLink';

export default function DevCard({ name, services }) {

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