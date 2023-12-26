import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout({ props, children, ...rest }) {

    return (

        <div>
            <Header />
            <main>
                <section className={`container md:max-w-2xl lg:max-w-4xl xl:max-w-5xl`}>
                    <Outlet />
                </section>
            </main>
        </div>

    );
}