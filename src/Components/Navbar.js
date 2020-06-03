import React, {useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Link from 'react-anchor-link-smooth-scroll'
import {LightenDarkenColor} from '../Components/Various'

const NavLink = (props) => {
  const [style, setStyle] = useState({color: '#343a40'})
  return (
    <Link 
      className='text-decoration-none mx-2'
      offset='95'
      style={style}
      onMouseOver={() => setStyle({color: LightenDarkenColor('#343a40', 70)})} 
      onMouseOut={() => setStyle({color: '#343a40'})} 
      href={props.href}
    >{props.children}</Link>
  )
}
class MyNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {shadow: ''}
  }

  componentDidMount() {window.addEventListener('scroll', this.handleScroll)}
  componentWillUnmount() {window.removeEventListener('scroll', this.handleScroll)}

  handleScroll = () => {
    (window.pageYOffset < 300) ? 
      this.setState(() => ({shadow: ''})) : 
      this.setState(() => ({shadow: 'shadow-sm'})) 
  }

  render() {
    const style = {transitionTimingFunction: 'ease-in-out', transitionDuration: '.8s'}

    return (
      <Navbar className={'py-3 bg-white ' + this.state.shadow} style={style} sticky='top' expand='lg'>
        <Nav className='mx-auto'>
          <NavLink href='#about'>About Me</NavLink>
          <NavLink href='#work'>Work</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </Nav> 
      </Navbar>
    )
  }
}

export default MyNavbar