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
      <main className={`flex w-full`}>
        <section
          className={`container my-2 py-2 inline-flex flex-col min-w-[320px] max-w-full items-center justify-center ${``}`}
        >
          <Outlet />
        </section>
      </main>
    </div>
  );
}
