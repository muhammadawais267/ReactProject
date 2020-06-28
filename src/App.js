import React from 'react';
import Header from './component/Header';
import Showcase from './component/Showcase';
import What from './component/What';
import Whoe from './component/Whoe';
import Clients from './component/Clients';
import Contact from './component/Contact';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <What />
      <Whoe />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;
