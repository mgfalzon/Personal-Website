import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'react-anchor-link-smooth-scroll'

export const NavLink = (props) => (
  <Link className='navlink text-decoration-none mx-2' offset='95' {...props} />
)

export default () => {

  const [shadow, setShadow] = useState('')
  useEffect(() => window.addEventListener('scroll', () =>
    setShadow(window.pageYOffset < 300 ? '' : 'shadow-sm')
  ), [])

  return (
    <Navbar className={'py-3 bg-white ' + shadow} sticky='top' expand='lg'>
      <Nav className='mx-auto'>
        <NavLink href='#about'>About Me</NavLink>
        <NavLink href='#work'>Work</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#contact'>Contact</NavLink>
      </Nav> 
    </Navbar>
  )
}