import { useState } from 'react';
import { pubs as pubArray } from './utils/constants';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';
import SourceSwapper from './components/SourceSwapper/SourceSwapper';

function App() {

  // useState for the activeSource - by default it is set to All Sources
  const [activeSource, setActiveSource] = useState(pubArray[0].publication);

  return (
    <main className='flex flex-col items-center'>
      <Header />
      <SourceSwapper activeSource={activeSource} setActiveSource={setActiveSource} />
      <Grid activeSource={activeSource} />
    </main>
  );
}

export default App;
