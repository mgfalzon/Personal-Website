import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import {BsPeopleCircle, BsFillXDiamondFill} from 'react-icons/bs'
import {Spacer, green} from '../Components/Various'

const Item = (props) => {
  return(!props.children ? <></>  :
    <div className='my-1'>
      <small> 
        <BsFillXDiamondFill size={10} color='#47cb9d' className='mr-2'/>
        {props.children}
      </small>
    </div>
  )
}

const List = ({data}) => (
  <div className='d-flex'>
    <div>
      <Item>{data[0]}</Item>
      <Item>{data[1]}</Item>
      <Item>{data[2]}</Item>
    </div>
    <Spacer className='px-5'/>
    <div>
      <Item>{data[3]}</Item>
      <Item>{data[4]}</Item>
      <Item>{data[5]}</Item>
    </div>
    <Spacer className='px-5'/>
    <div>
      <Item>{data[6]}</Item>
      <Item>{data[7]}</Item>
      <Item>{data[8]}</Item>
    </div>
  </div>
)

const parseText = (text) => {
      console.log(text)
      if (text.slice(0,1) == '[' && text.slice(-1) == ']') {
        return <span style={green}>{text.slice(1, -1) + " "}</span> 
      } else {
        return <span>{text + " "}</span>
      }
}

const About = ({data}) => {
    return (
      <Container fluid>
        <Row sm={1} md={2} className='p-5 justify-content-around'>
          <Col>
            <h3 className='pb-3' id='about'>
              <BsPeopleCircle className='mb-1 mr-3' color='#47cb9d'/>
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
}

export default About