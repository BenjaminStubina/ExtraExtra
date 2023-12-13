import { Dialog } from '@mui/material';
import './ModalStyle.scss';
import { socialArray } from '../../Constants/constants';
import SocialLink from '../SocialLink/SocialLink';
function ContactLinks() {
    return (
        <>

        </>
    );
}

const AboutProject = ({ openAboutProject, handleCloseAboutProject }) => {
    return (
        <Dialog sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    // width: "80%",
                    width: "fit-content",
                    // maxWidth: "1200px",
                },
            },
        }} open={openAboutProject} onClose={handleCloseAboutProject}
        // className='w-full'
        >

            <section className=''>
                {
                    socialArray.map((social) => {
                        return (
                            <SocialLink
                                key={social.id}
                                service={social.type}
                                identifier={social.identifier}
                                optionalText={social.optionalText}
                            />

                        );
                    })
                }

                <p>
                    ExtraExtra is stepping up for Canadians at a time when access to reliable information is more important than ever. Since July 2023, Meta has blocked users across Canada from seeing news on Instagram, Facebook, and Threads. A majority of Canadians under 65
                    <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/231110/dq231110b-eng.htm" target="_">
                        {` rely on social media `}
                    </a>
                    to get the news. This ban hurts all Canadians by placing barriers to high-quality journalism.
                </p>
                <p>
                    The <a href="https://www.canada.ca/en/canadian-heritage/services/online-news.html">Online News Act</a> requires Meta and Google to share a portion of ad revenue with publishers. Meta has chosen to cut off all news to all Canadians instead. This hurts consumers and starves the press of crucial funding.
                </p>
                <p>
                    ExtraExtra is a solution to help Canadians stay informed. Our social accounts share headlines and pictures, and our site invites visitors to read full stories from a variety of local, provincial, and international sources. We aim to meet people where they're at while staying under Big Tech's radar.
                </p>

                <p>
                    To learn more about the implications of Meta's ban, listen to Front Burner's podcast episode:
                </p>
                <iframe className="self-center border-radius:12px mt-4 max-w-[800px]" src="https://open.spotify.com/embed/episode/65MXXSVb3sGOqu3th16wYg?utm_source=generator&theme=0&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            </section>
        </Dialog>
    );
};

export default AboutProject;

/*

const AboutProject = ({ openAboutProject, handleCloseAboutProject }) => {
    return (
        <Dialog sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    width: "80%",
                    maxWidth: "1200px",
                },
            },
        }} open={openAboutProject} onClose={handleCloseAboutProject} className='w-full'>
            <section className='text-[20px] md:text-[22px] xl:text-[26px] p-4 md:p-6 xl:p-8 gap-2 flex flex-col justify-center'>
                <p className='text-[22px] md:text-[24px] xl:text-[30px] underline'>
                    Why:
                </p>
                <p>
                    ExtraExtra was created to address the limited access Canadians have to local, provincial, and international news. This access gap emerged following the recent bans META has imposed on their social media apps in response to the Online News Act passed by the Canadian Government in July of 2023.
                </p>
                <p className='mt-2 text-[22px] md:text-[24px] xl:text-[30px] underline'>
                    Learn More:
                </p>
                <p>
                    To learn more about the implications of META's bans and what might happen if Google decides to follow the same path, listen to Front Burner's podcast episode:
                </p>
                <iframe className="self-center border-radius:12px mt-4 max-w-[800px]" src="https://open.spotify.com/embed/episode/65MXXSVb3sGOqu3th16wYg?utm_source=generator&theme=0&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            </section>
        </Dialog>
    );
};
*/