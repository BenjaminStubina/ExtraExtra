import { Dialog } from '@mui/material';
import './ModalStyle.scss';
import { socials as socialArray } from '../../utils/constants';
import SocialLink from '../SocialLink/SocialLink';


const AboutProject = ({ open, onClose }) => {
    return (
        <Dialog sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    width: "fit-content",
                },
            },
        }}
            open={open}
            onClose={onClose}
        // className='w-full'
        >

            <section className='w-full p-6 flex flex-col gap-2'>
                <ul className='flex justify-center'>

                    {
                        socialArray.map((social) => {
                            return (
                                <li key={social.id}>
                                    <SocialLink
                                        service={social.type}
                                        identifier={social.identifier}
                                        optionalText={social.optionalText}
                                    />
                                </li>
                            );
                        })
                    }

                </ul>
                <p>
                    ExtraExtra is stepping up for Canadians at a time when access to reliable information is more important than ever. Since July, Meta has blocked users across Canada from seeing news on Instagram, Facebook, and Threads. This is an issue for the majority of Canadians under 65
                    <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/231110/dq231110b-eng.htm" target="_blank" rel="noopener noreferrer">
                        {` who rely on social media `}
                    </a>
                    to get their news. This ban hurts all Canadians by placing barriers on high-quality journalism.
                </p>
                <p>
                    The <a href="https://www.canada.ca/en/canadian-heritage/services/online-news.html" target="_blank" rel="noopener noreferrer">Online News Act</a> requires that Meta and Google share a portion of ad revenue with publishers. Meta has chosen to cut off all news to all Canadians instead. This hurts consumers and starves the press of crucial funding.
                </p>
                <p>
                    ExtraExtra is a solution to help Canadians stay informed. Our social accounts share headlines and pictures, and our website links visitors to full stories from a variety of local, national, and international sources. We aim to meet people where they're at while staying under Big Tech's radar.
                </p>

                <p>
                    To learn more about the implications of Meta's ban, listen to Front Burner's podcast episode:
                </p>
                <iframe className="self-center border-radius:12px mt-4 max-w-[800px]" src="https://open.spotify.com/embed/episode/65MXXSVb3sGOqu3th16wYg?utm_source=generator&theme=0&t=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            </section>
        </Dialog>
    );
};

export default AboutProject;
