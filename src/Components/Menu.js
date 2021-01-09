import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, Fade, Collapse } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'

import { NavLink } from './Navbar'

const Menu = (props) => (
  <div className='menu'>
    <Fade in={props.in}>
      <Container fluid className={'position-absolute bg-white ' + (!props.in && 'd-none')}>
        <Nav className='d-flex flex-column align-items-center'>
          <NavLink href='#about'>About Me</NavLink>
          <NavLink href='#work'>Work</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </Nav> 
      </Container>
    </Fade>
  </div>
)

export default () => {

  const [state, setState] = useState({shadow: '', menu: false, brand: false})
  useEffect(() => window.addEventListener('scroll', () =>
    setState(window.pageYOffset < 300 ? 
        {...state, shadow: '', brand: false} : 
        {...state, shadow: 'shadow-sm', brand: true} 
    )
  ), [])
  const onClick = () => {
    setState(
      state.menu ? 
        {...state, shadow: 'shadow-sm', menu: false} :
        {...state, shadow: '', menu: true}
    )
  }

  return <>
    <Navbar className={'py-3 bg-white ' + state.shadow} sticky='top' expand='lg'>
      <Collapse in={state.brand} timeout='700'>
        <Navbar.Brand>Matthew Falzon</Navbar.Brand>
      </Collapse>
      <Nav className='ml-auto'>
        <div className="my-auto mr-4" onClick={onClick}>
          <FaBars />
        </div>
      </Nav> 
    </Navbar>
    <Menu in={state.menu}/>
  </>
}