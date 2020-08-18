import React from 'react';
import data from './data'
import {BrowserView, MobileView} from 'react-device-detect'

// Browser
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import About from './Sections/About'
import Work from './Sections/Work'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Archive from './Sections/Archive'
import {Spacer} from './Components/Various'

// Mobile
import MobileHeaderNav from './Mobile/MobileHeaderNav'
import MobileAbout from './Mobile/MobileAbout'
import MobileWork from './Mobile/MobileWork'
import MobileProjects from './Mobile/MobileProjects'
import MobileContact from './Mobile/MobileContact'

// magit test

const App = () => (
  <>
    <BrowserView>
      <Header />
      <Navbar />
      <About data={data['about']}/>
      <Work  data={data['work']} />
      <Projects data={data['projects']}/>
      <Archive data={data['archive']}/>
      <Spacer className='p-3' />
      <Contact />
      <Spacer className='p-4' />
    </BrowserView>
    <MobileView>
      <MobileHeaderNav />
      <MobileAbout data={data['about']}/>
      <MobileWork  data={data['work']} />
      <MobileProjects  data={data['projects']} />
      <Spacer className='p-3' />
      <MobileContact />
      <Spacer className='p-4' />
    </MobileView>
  </>
)

export default App;
