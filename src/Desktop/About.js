import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { BsPeopleCircle, BsFillXDiamondFill } from 'react-icons/bs'

const Item = (props) => (
  !props.children ? <></>  :
    <div className='small my-1'>
      <BsFillXDiamondFill size={10} className='color mr-2' />
      {props.children}
    </div>
)

const List = ({data}) => (
  <div className='d-flex'>
    <div className='pr-5'>
      <Item>{data[0]}</Item>
      <Item>{data[1]}</Item>
      <Item>{data[2]}</Item>
    </div>
    <div className='px-5'>
      <Item>{data[3]}</Item>
      <Item>{data[4]}</Item>
      <Item>{data[5]}</Item>
    </div>
    <div className='pl-5'>
      <Item>{data[6]}</Item>
      <Item>{data[7]}</Item>
      <Item>{data[8]}</Item>
    </div>
  </div>
)

const parseText = (text) => (
  text.slice(0,1) == '[' && text.slice(-1) == ']' ?
    <span className='color'>{text.slice(1, -1) + " "}</span> 
  :
    <span>{text + " "}</span>
)

const About = ({data}) => (
  <Container fluid className='about'>
    <Row sm={1} md={2} className='p-5 justify-content-around'>
      <Col>
        <h3 className='pb-3' id='about'>
          <BsPeopleCircle className='color mb-1 mr-3' />
          About Me
        </h3>
        <p>Hello! I'm {data.nickname}, a {data.job} based in {data.location}.</p>
        <p>{data.personalDesc}</p>
        <p>
          {data.jobDesc.split(" ").map(word => parseText(word))}
        </p>
        <p>{data.listHeader}</p>
        <List data={data.list}/>
      </Col>
      <Col md={{span: 'auto', offset: 1}}>
        <Image fluid className='shadow' src={require('../Assets/headshot.jpg')} rounded />
      </Col>
    </Row>
  </Container>
)

export default About
export { List, parseText }