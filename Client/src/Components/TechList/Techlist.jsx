import TECHSTACK from "../../Constants/tech";
import Tech from "../Tech/Tech";

const Techlist = () => {
    return (
        <section className="flex flex-wrap gap-1 md:gap-6 xl:gap-[50px]">
            {TECHSTACK.map((tech) => {
                return (
                    <Tech 
                        key={tech.tech}
                        tech={tech}
                    />
                )
            })}
        </section>
    )
}

export default Techlist