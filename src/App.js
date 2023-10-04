import './App.css';
import Header from './Components/Header/Header';
import Grid from './Components/Grid/Grid';
import SourceSwapper from './Components/SourceSwapper/SourceSwapper';
import { useState } from 'react';
import SOURCES from './Constants/sources';

function App() {

  const [activeSource, setActiveSource] = useState(SOURCES[0].publication);

  return (
    <main className='App'>
      <Header/>
      <SourceSwapper activeSource={activeSource} setActiveSource={setActiveSource}/>
      <Grid activeSource={activeSource}/>
    </main>
  );
}

export default App;
