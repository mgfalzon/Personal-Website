import React, {useState} from 'react'
import {Jumbotron, Col} from 'react-bootstrap'
import Wave from 'react-wavify'
import {FaEnvelope, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import {Underline, LightenDarkenColor} from '../Components/Various'

const Icon = (props) => {
  const [color, setColor] = useState('#47cb9d')

  return (
    <a 
      className='mx-2'
      href={props.href}
      onMouseOver={() => setColor(LightenDarkenColor('#47cb9d', -30))}
      onMouseOut={() => setColor('#47cb9d')}
      style={{color: color}}
    >{props.children}</a>
  )
}

const Icons = () => (
  <div className='d-flex justify-content-center'>
    <Icon href='mailto:mattgfalzon@gmail.com'><FaEnvelope/></Icon>
    <Icon href='https://www.linkedin.com/in/matthew-falzon-225527188/'><FaLinkedin/></Icon>
    <Icon href='https://github.com/mgfalzon/'><FaGithubSquare/></Icon>
  </div>
)

const Header = () => (
<>
    <Jumbotron className='my-0 py-5'>
      <div className='text-center'>
        <h1 className='display-4 font-weight-bold' style={{letterSpacing: 1}}>Matthew Falzon</h1>
        <Underline length={3} width='3' padding='2' color='#47cb9d'/>
        <h4 className=' mt-3 text-muted text-uppercase'style={{letterSpacing: 2}}>Software Developer</h4>
        <Icons />
      </div>
    </Jumbotron>
    <Wave style={{backgroundColor: '#e9ecef', maxHeight: 25, overflow: 'hidden'}}
      options={{
        height: 0,
        amplitude: 20,
      }}
    />
</>
)

export default Header