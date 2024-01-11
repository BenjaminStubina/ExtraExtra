export default function ResourceList({ array, className, children, ...rest }) {
  return (
    <div className={`${className || ""}`} {...rest}>
      <ul className={`flex flex-col gap-1 md:gap-2`}>
        {array.map((resource) => {
          return (
            <li
              className={`flex flex-col gap-2 items-stretch`}
              key={resource.id}
            >
              <ResourceItem props={resource} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ResourceItem({ className, props, ...rest }) {
  const { date, title, url, source } = props;
  return (
    <p className={`${className || ""}`} {...rest}>
      <span>{date}:</span> "{title}" [
      <a href={url} className="hover:underline decoration-blue-900 text-blue-900">
        {source}
      </a>
      ]
    </p>
  );
}
