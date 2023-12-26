import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import Resources from './pages/Resources';


function App() {

  return (
    <>
      <Header />
      <main>
        <section className={`container md:max-w-2xl lg:max-w-4xl xl:max-w-5xl`}>
          <Routes>
            {/* <Route path='/' element={<Header />}> */}
            {/* <Route index element={<Home />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='about' element={<Project />} />
            <Route path='resources' element={<Resources />} />
            {/* </Route> */}
          </Routes>
        </section>
      </main>
    </>

  );
}

export default App;
