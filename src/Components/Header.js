import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { FaEnvelope, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import Wave from 'react-wavify'

const Icons = () => (
  <div className='d-flex justify-content-center'>
    <a href='mailto:mattgfalzon@gmail.com'><FaEnvelope/></a>
    <a href='https://www.linkedin.com/in/matthew-falzon-225527188/'><FaLinkedin/></a>
    <a href='https://github.com/mgfalzon/'><FaGithubSquare/></a>
  </div>
)

export default () => (
<div className='header'>
    <Jumbotron className='my-0 py-5'>
      <div className='text-center'>
        <h1 className='display-4 font-weight-bold' style={{letterSpacing: 1}}>Matthew Falzon</h1>
        <div className='underline large' />
        <h4 className=' mt-3 text-muted text-uppercase'style={{letterSpacing: 2}}>Software Developer</h4>
        <Icons />
      </div>
    </Jumbotron>
    <Wave style={{backgroundColor: '#e9ecef', maxHeight: 25, overflow: 'hidden'}}
      options={{height: 0, amplitude: 20}}
    />
</div>
)