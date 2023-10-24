import { Dialog } from '@mui/material'

const AboutUs = ({ openAboutUs, handleCloseAboutUs }) => {
    return (
        <Dialog open={openAboutUs} onClose={handleCloseAboutUs} className=''>
            <section>
                <p>ExtraExtra was created, designed, and developed in Toronto by Benjamin Stubina and Benny Goldman. It was built using ReactJS, TailwindCSS, Express, NodeJS, and MongoDB. </p>
                <p>Benjamin and Benny are recent coding bootcamp grads seeking job opportunities.</p>
                <p>Get in touch:</p>
                <ul>
                    <li>Benjamin Stubina
                        <ul>
                            <li><a href="https:github.com/BenjaminStubina">Github</a></li>
                            <li><a href="https:www.linkedin.com/in/benjamin-stubina/">LinkedIn</a></li>
                        </ul>
                    </li>
                    <li>Benny Goldman
                        <ul>
                            <li><a href="https:github.com/bennygoldman">Github</a></li>
                            <li><a href="https:www.linkedin.com/in/bennygoldman/">LinkedIn</a></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </Dialog>
    )
}

export default AboutUs