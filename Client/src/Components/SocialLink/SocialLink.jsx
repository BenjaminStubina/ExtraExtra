import PropTypes from 'prop-types';
import linkedinLogo from '../../assets/icons/social/linkedin.png';
import githubLogo from '../../assets/icons/social/github.png';
import emailLogo from '../../assets/icons/social/email.png';
import instagramLogo from '../../assets/icons/social/instagram.png';


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
            return emailLogo;
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
            className='flex Xflex-col md:flex-row items-center gap-2'
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={imageSrc}
                className="w-6"
                alt={altText}
            />
            <p>
                {optionalText ? optionalText : !optionalText && service === 'email' || service === 'linkedin' || service === 'github' ? identifier : `@${identifier}`}
            </p>
        </a>
    );
}

SocialLink.propTypes = {
    service: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    optionalText: PropTypes.string
};