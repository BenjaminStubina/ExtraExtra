import { Dialog } from '@mui/material'

const AboutProject = ({ openAboutProject, handleCloseAboutProject }) => {
    return (
        <Dialog open={openAboutProject} onClose={handleCloseAboutProject} className=''>
            <section className='px-4 py-2'>
            <p>
                ExtraExtra was created to address the limited access Canadians have to local, provincial, and international news. This access gap emerged following the recent bans META has imposed on their social media apps in response to the Online News Act passed by the Canadian Government in July of 2023.
            </p>
            <span>
                To learn more about the implications of META's bans and what might happen if Google decides to follow the same path, listen to Front Burner's podcast episode:
            </span>
            <iframe className="border-radius:12px" src="https://open.spotify.com/embed/episode/65MXXSVb3sGOqu3th16wYg?utm_source=generator&theme=0&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            </section>
        </Dialog>
    );
};

export default AboutProject;