import React from 'react';

import { About, Footer, Header, Skills, Work, Testimonials } from './container';
import { Navbar } from './components';
import './App.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;