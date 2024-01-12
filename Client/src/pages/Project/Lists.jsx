// import SocialLink from "../../Components/ui/SocialLink";
import { DevItem, TechItem, SocialItem } from "./ListItems";

export function DevList({ array, className, children, ...rest }) {
  return (
    <div className={`${className || ""}`} {...rest}>
      {children}
      <ul className={`_min-w-0 ${`lg:min-w-max`}`}>
        {array.map((dev) => {
          return (
            <li className={`flex mb-4 ${``}`} key={dev.id}>
              <DevItem name={dev.name} services={dev.services} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function TechList({ array, className, children, ...rest }) {
  return (
    <div className={`${className || ""}`} {...rest}>
      {children}
      <ul
        className={`flex flex-col _md:flex-row _md:flex-wrap lg:flex-col lg:flex-nowrap _md:justify-center _md:items-center`}
      >
        {array.map((tech) => {
          return (
            <li
              className={`_md:w-1/2 _lg:w-auto flex mb-4 _flex-col gap-2 _items-stretch`}
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

export function SocialList({ array, className, children, ...rest }) {
  return (
    <div className={`${className || ""}`} {...rest}>
      {children}
      <ul className={`${``}`}>
        {array.map((social) => {
          return (
            <li key={social.id} className={` mb-4 ${``}`}>
              <SocialItem social={social} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// export function DefaultList({ array, Item, className, children, ...rest }) {
//   return (
//     <div className={`${className || ""}`} {...rest}>
//       {children}
//       <ul className={`${``}`}>
//         {array.map((item) => {
//           return (
//             <li key={item.id} className={` ${``}`}>
//               {/* <SocialItem social={social} /> */}
//               <Item props={item} />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
