import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout({ props, children, ...rest }) {
  // const style = {
  //     main: {
  //         display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //         width: '100%',
  //         marginTop: '1.5rem',
  //         marginBottom: '1.5rem',
  //     }
  // };

  return (
    <div>
      <Header />
      <main className={``}>
        <section
          className={`container my-2 py-2 min-w-[320px] text-center ${`md:max-w-3xl lg:max-w-5xl xl:max-w-7xl`}`}
        >
          <Outlet />
        </section>
      </main>
    </div>
  );
}
