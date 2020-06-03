import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

class MyNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {shadow: ''}
  }

  /*
  componentDidMount() {window.addEventListener('scroll', this.handleScroll)}
  componentWillUnmount() {window.removeEventListener('scroll', this.handleScroll)}

  handleScroll = () => {
    (window.pageYOffset === 0) ? 
      this.setState(() => ({shadow: ''})) : 
      this.setState(() => ({shadow: 'shadow'})) 
  }
  */

  render() {
    const style = {transitionTimingFunction: 'ease-in-out', transitionDuration: '.8s'}

    return (
      <Navbar className={'py-3 bg-white ' + this.state.shadow} style={style} sticky='top' expand='lg'>
        <Nav className='mx-auto'>
          <Nav.Link href='#about'>About Me</Nav.Link>
          <Nav.Link href='#work'>Work</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#archive'>Contact</Nav.Link>
        </Nav> 
      </Navbar>
    )
  }
}

export default MyNavbar