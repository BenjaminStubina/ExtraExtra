import SocialLink from "../../Components/ui/SocialLink";

export function DevItem({ name, services }) {
  return (
    <>
      <ul className={`flex gap-2 _mx-2 ${``}`}>
        {services.map((service) => (
          <li key={`${name}-${service.type}`}>
            <SocialLink
              service={service.type}
              identifier={service.identifier}
            />
          </li>
        ))}
      </ul>
      <p className={`mx-2 text-lg ${`lg:text-xl`}`}>{name}</p>
    </>
  );
}

export function TechItem({ image, title }) {
  return (
    <>
      <img src={image} alt={title} className={`w-8 _mt-auto _self-center`} />
      <p className={`_mt-auto _self-center text-lg ${`lg:text-xl`}`}>{title}</p>
    </>
  );
}

export function SocialItem({ social }) {
  return (
    <>
      <SocialLink
        className={`gap-2 _mx-4 underline hover:no-underline`}
        service={social.type}
        identifier={social.identifier}
        optionalText={social.optionalText}
      />
    </>
  );
}
