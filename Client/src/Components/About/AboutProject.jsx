import { Dialog } from '@mui/material'
import './ModalStyle.scss';

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
            <section className='text-[20px] md:text-[22px] xl:text-[32px] p-4 md:p-6 xl:p-8 gap-2 md:gap-4 xl:gap-6 flex flex-col justify-center'>
                <p className=''>
                    ExtraExtra was created to address the limited access Canadians have to local, provincial, and international news. This access gap emerged following the recent bans META has imposed on their social media apps in response to the Online News Act passed by the Canadian Government in July of 2023.
                </p>
                <p className='mt-4'>
                    To learn more about the implications of META's bans and what might happen if Google decides to follow the same path, listen to Front Burner's podcast episode:
                </p>
                <iframe className="self-center border-radius:12px mt-4 max-w-[800px]" src="https://open.spotify.com/embed/episode/65MXXSVb3sGOqu3th16wYg?utm_source=generator&theme=0&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            </section>
        </Dialog>
    );
};

export default AboutProject;