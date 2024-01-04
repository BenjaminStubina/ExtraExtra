import { Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import Home from './pages/Home/Home';
import Project from './pages/Project/index';
import Resources from './pages/Resources/index';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
          <Route path='/about' element={<Project />} />
          <Route path='/links' element={<Resources />} />
      </Routes>
    </>

  );
}

export default App;
