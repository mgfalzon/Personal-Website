import React, {useState} from 'react'
import {Jumbotron, Col, Button, Container} from 'react-bootstrap'

const ImgPanel = (props) => {
    const bsStyle = 'mb-0 bg-cover text-center text-' + props.color
    const csStyle = {
      background: 'url(' + props.src + ')  no-repeat center center fixed',
      backdropFilter: 'blur(20px)'
    }
    return <Jumbotron fluid className={bsStyle} style={csStyle}>{props.children}</Jumbotron>
}

const Spacer = (props) => (
   <div className= {props.className}></div>
)

const Underline = (props) => (
    <Col 
        lg={props.length}
        className={'px-1 w-50 mx-auto pt-' + props.padding} 
        style={{borderBottom: props.width + 'px solid' + props.color }}
    ></Col>
)

const NewBadge = () => (
    <p className='ml-3 my-auto badge text-white' style={{backgroundColor:'#47cb9d', fontSize: 10}}>NEW</p> 
)

const TagList = ({tags, justify, padding}) => {
    const justifyContent = justify=='start' ? ' justify-content-start ' : ' justify-content-end '
    const pad = padding ? padding : 'mr-3 my-4 '
    let tagComponents = tags.map(value => (
        <div className='mx-1 badge text-white'style={{backgroundColor: '#47cb9d'}}>{value}</div>
    ))
    return (
        <div className={'d-flex ' + pad + justifyContent}>
            {tagComponents}
        </div>
    )
}

const GreenButton = (props) => {
    const [color, setColor] = useState('#47cb9d')
    const style = {transition: 'all .2s ease-in-out 0s', backgroundColor: color, width: 85}
    return (
        <Button 
            variant='light'
            className={props.className + ' border-0 text-white'} 
            style={style} 
            href={props.href}
            onMouseOver={() => setColor(LightenDarkenColor('#47cb9d', -30))}
            onMouseOut={() => setColor('#47cb9d')}
            download={props.download}
        >{props.children} </Button>
    )
}

const ShadowDiv = (props) => {
    const [shadow, setShadow] = useState('')
    const transition = {transition: 'all .4s ease-in-out 0s'}
    return (
        <Container fluid 
            className={props.className + ' ' + shadow} 
            style={{...transition , ...props.style}}
            href={props.href && props.href}
            onMouseOver={() => setShadow('shadow')}
            onMouseOut={() => setShadow('')}
        >{props.children} </Container>
    )
}

function LightenDarkenColor(col, amt) {
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16)
 
    var r = (num >> 16) + amt
 
    if (r > 255) r = 255
    else if  (r < 0) r = 0
 
    var b = ((num >> 8) & 0x00FF) + amt
 
    if (b > 255) b = 255
    else if  (b < 0) b = 0
 
    var g = (num & 0x0000FF) + amt
 
    if (g > 255) g = 255
    else if (g < 0) g = 0
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

const green = {color: '#47cb9d'} 
const roundBottom = {borderBottomRightRadius: '45%', borderBottomLeftRadius: '45%'} 

export {Spacer, Underline, TagList, NewBadge, GreenButton, ShadowDiv, LightenDarkenColor, green, roundBottom}