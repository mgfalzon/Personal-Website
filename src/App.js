import React from 'react';
import data from './data'
import { BrowserView, MobileView } from 'react-device-detect'

// Browser
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import About from './Desktop/About'
import Work from './Desktop/Work'
import Projects from './Desktop/Projects'
import Contact from './Desktop/Contact'
import Archive from './Desktop/Archive'
import {Spacer} from './Components/Various'

// Mobile
import Menu from './Components/Menu'
import MobileAbout from './Mobile/About'
import MobileWork from './Mobile/Work'
import MobileProjects from './Mobile/Projects'
import MobileArchive from './Mobile/Archive'
import MobileContact from './Mobile/Contact'

const App = () => (
  <>
    <BrowserView>
      <Header />
      <Navbar />
      <About data={data['about']}/>
      <Work data={data['work']} />
      <Projects data={data['projects']}/>
      <Archive data={data['archive']}/>
      <Spacer className='p-3' />
      <Contact />
      <Spacer className='p-4' />
    </BrowserView>
    <MobileView>
      <div className='mobile'>
        <Header />
        <Menu />
        <MobileAbout data={data['about']}/>
        <MobileWork  data={data['work']} />
        <MobileProjects  data={data['projects']} />
        <MobileArchive data={data['archive']}/>
        <Spacer className='p-3' />
        <MobileContact />
        <Spacer className='p-4' />
      </div>
    </MobileView>
  </>
)

export default App;