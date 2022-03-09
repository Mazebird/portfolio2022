import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const App = () => {
  return (
    //Englobe toute l'Api
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projets' element={<Projects/>}/>
        <Route path='/CV' element={<CV/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element= {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;