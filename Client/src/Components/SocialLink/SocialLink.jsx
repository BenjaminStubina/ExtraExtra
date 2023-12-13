import PropTypes from 'prop-types';
import linkedinLogo from '../../Assets/Images/techIcons/linkedin.png';
import githubLogo from '../../Assets/Images/techIcons/github.png';
import emailLogo from '../../Assets/Images/techIcons/email.png';
import instagramLogo from '../../Assets/Images/techIcons/instagram.png';
import defaultLogo from '../../Assets/Images/techIcons/html.png';

function generateUrl(service, identifier) {
    switch (service) {
        case 'email':
            return `mailto:${identifier}`;
        case 'linkedin':
            return `https://www.linkedin.com/in/${identifier}`;
        default:
            return `https://www.${service}.com/${identifier}`;
    }
}

function getImageSource(service) {
    switch (service) {
        case 'linkedin':
            return linkedinLogo;
        case 'github':
            return githubLogo;
        case 'instagram':
            return instagramLogo;
        case 'email':
            return emailLogo;
        default:
            return defaultLogo;
    }
}

export default function SocialLink({ service = '', identifier = '', optionalText = '', ...rest }) {

    if (!service || !identifier) return null;

    const url = generateUrl(service, identifier);
    const imageSrc = getImageSource(service);
    const altText = service.charAt(0).toUpperCase() + service.slice(1);

    return (
        <a
            {...rest}
            className='flex flex-col md:flex-row items-center gap-2'
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={imageSrc}
                className="w-12"
                alt={altText}
            />
            <p>
                {optionalText ? optionalText : !optionalText && service === 'email' || service === 'linkedin' ? identifier : `@${identifier}`}
            </p>
        </a>
    );
}

SocialLink.propTypes = {
    service: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    optionalText: PropTypes.string
};