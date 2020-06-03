import React from 'react';
import data from './data'

import Header from './Components/Header'
import Navbar from './Components/Navbar'
import About from './Sections/About'
import Work from './Sections/Work'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import {Spacer} from './Components/Various'

const App = () => (
  <>
    <Header />
    <Navbar />
    <About data={data['about']}/>
    <Work  data={data['work']} />
    <Projects data={data['projects']}/>
    <Spacer className='p-3' />
    <Contact />
    <Spacer className='p-4' />
  </>
)

export default App;
