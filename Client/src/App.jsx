<<<<<<< HEAD
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
=======
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Project from './pages/Project';
import Resources from './pages/Resources';

>>>>>>> e5e540a0326301c22e8acaa394de721cf81805bc

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<Project />} />
          <Route path='links' element={<Resources />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
