import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const App = () => {
  return (
    //Englobe toute l'Api
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projets' element={<Projects/>}/>
        <Route path='/CV' element={<CV/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element= {<NotFound/>}/>
        {/* //Version redirigeant vers une page
        <Route path='/404' element= {<NotFound/>}/>
        <Route path='*' element={<Navigate to ="/404"/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;