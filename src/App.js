import React from 'react';
import data from './data'

import Header from './Components/Header'
import Navbar from './Components/Navbar'
import About from './Sections/About'
import Work from './Sections/Work'
import Projects from './Sections/Projects'

const App = () => (
  <>
    <Header />
    <Navbar />
    <About data={data['about']}/>
    <Work  data={data['work']} />
    <Projects data={data['projects']}/>
  </>
)

export default App;
