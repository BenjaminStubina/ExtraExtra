function TechItem({ image, title }) {
  // original styles for reference:
  // w-[30px] xs:w-[40px] lg:w-[50px] xl:w-[70px]

  return (
    <>
      <img src={image} alt={title} className={`w-8 _mt-auto _self-center`} />
      <p className={`_mt-auto _self-center ${`md:text-lg xl:text-xl`}`}>
        {title}
      </p>
    </>
  );
}

export default function TechList({ array, children, ...rest }) {
  return (
    <div {...rest}>
      {children}
      <ul className={`_flex _justify-between _w-[300px] _md:w-[450px]`}>
        {array.map((tech) => {
          return (
            <li
              className={`_w-1/2 flex _flex-col _gap-2 _items-stretch`}
              key={tech.tech}
            >
              <TechItem image={tech.image} title={tech.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
