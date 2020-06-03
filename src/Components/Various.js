import React from 'react'
import {Jumbotron, Col} from 'react-bootstrap'

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
        sm={props.length}
        className={'px-1 w-50 mx-auto pt-' + props.padding} 
        style={{borderBottom: props.width + 'px solid' + props.color }}
    ></Col>
)

const NewBadge = () => (
    <p className='ml-3 my-auto badge text-white' style={{backgroundColor:'#47cb9d', fontSize: 10}}>NEW</p> 
)

const TagList = ({tags}) => {
    let tagComponents = tags.map(value => (
        <div className='mx-1 badge text-white'style={{backgroundColor: '#47cb9d'}}>{value}</div>
    ))
    return (
        <div className='d-flex mr-3 my-4 justify-content-end'>
            {tagComponents}
        </div>
    )
}


const green = {color: '#47cb9d'} 
const roundBottom = {borderBottomRightRadius: '45%', borderBottomLeftRadius: '45%'} 

export {Spacer, Underline, TagList, NewBadge, green, roundBottom}