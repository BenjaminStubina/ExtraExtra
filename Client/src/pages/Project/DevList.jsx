import SocialLink from "../../Components/ui/SocialLink";

export default function DevList({ array, children, ...rest }) {
  return (
    <div className={`_flex ${``}`} {...rest}>
      {children}
      <ul
        // className={`min-w-0 _flex _flex-wrap _flex-col _self-center _items-center _gap-4 _md:flex-row _md:gap-8`}
        className={`min-w-0 ${``}`}
      >
        {array.map((dev) => {
          return (
            <li
              // className={`flex _md:flex-col _gap-0 _md:gap-4 _self-center`}
              className={`flex ${``}`}
              key={dev.id}
            >
              <DevItem name={dev.name} services={dev.services} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DevItem({ name, services }) {
  return (
    <>
      <ul
        // className={`_w-full flex _items-end _flex-col _gap-3`}
        className={`flex ${``}`}
      >
        {services.map((service) => (
          <li key={`${name}-${service.type}`}>
            <SocialLink
              service={service.type}
              identifier={service.identifier}
            />
          </li>
        ))}
      </ul>
      <p className={`${`md:text-lg xl:text-xl`}`}>{name}</p>
    </>
  );
}
