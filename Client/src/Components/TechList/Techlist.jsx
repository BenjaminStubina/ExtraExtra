import TECHSTACK from "../../Constants/tech";
import Tech from "../Tech/Tech";

const Techlist = () => {
    return (
        <section className="flex flex-wrap gap-1 1sm:gap-3 2lg:gap-6">
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