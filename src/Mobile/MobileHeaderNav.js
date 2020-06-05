import React, {useState} from 'react'
import {Container, Navbar, Nav, Fade, Collapse, Jumbotron} from 'react-bootstrap'
import Wave from 'react-wavify'
import {FaEnvelope, FaLinkedin, FaGithubSquare, FaBars} from 'react-icons/fa'
import {Underline, LightenDarkenColor} from '../Components/Various'
import Link from 'react-anchor-link-smooth-scroll'

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
    <Icon href='https://github.com/MFalzon21/'><FaGithubSquare/></Icon>
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

const NavBtn = (props) => (
  <div 
    className="my-auto mr-4" 
    onClick={() => props.onClick()}
  >{<FaBars />}</div>
)

const NavLink = (props) => {
  const defaultStyle = {fontSize: 25, backgroundColor: 'white !important', opacity: 1}
  const [style, setStyle] = useState({color: '#343a40'})
  return (
    <Link 
      className='text-decoration-none mx-auto my-3'
      offset='95'
      style={{...defaultStyle, ...style}}
      onMouseOver={() => setStyle({color: LightenDarkenColor('#343a40', 70)})} 
      onMouseOut={() => setStyle({color: '#343a40'})} 
      href={props.href}
    >{props.children}</Link>
  )
}

const Menu = (props) => {
  return (
    <Fade in={props.in}>
      <Container fluid className={'bg-white ' + (!props.in && 'd-none')} style={{zIndex: 3, ...props.position}}>
        <Nav className='d-flex flex-column mx-auto'>
          <NavLink href='#about'>About Me</NavLink>
          <NavLink href='#work'>Work</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </Nav> 
      </Container>
    </Fade>
  )
}

class HeaderNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {shadow: '', menu: false, brand: false, menuPosition:{position: 'absolute', top: 400}}
  }

  componentDidMount() {window.addEventListener('scroll', this.handleScroll)}
  componentWillUnmount() {window.removeEventListener('scroll', this.handleScroll)}

  handleScroll = () => {
    (window.pageYOffset < 300) ? 
      this.setState(() => ({shadow: '', brand: false, menuPosition: {position: 'absolute', top: 400}})) : 
      this.setState(() => ({shadow: 'shadow-sm', brand: true, menuPosition: {position: 'fixed', top: 72}})) 
  }

  onClick = () => {
    this.state.menu ? 
    this.setState(() => ({menu: false})) :
    this.setState(() => ({menu: true})) 
  }

  render() {
    const style = {transitionTimingFunction: 'ease-in-out', transitionDuration: '.8s'}

    return (
      <>
        <Header />
        <Navbar className={'py-3 bg-white ' + this.state.shadow} style={style} sticky='top' expand='lg'>
          <Collapse in={this.state.brand} timeout='700'>
            <Navbar.Brand>Matthew Falzon</Navbar.Brand>
          </Collapse>
          <Nav className='ml-auto'>
              <NavBtn onClick={this.onClick}></NavBtn>
          </Nav> 
        </Navbar>
        <Menu in={this.state.menu} position={this.state.menuPosition}/>
      </>
    )
  }
}


export default HeaderNav