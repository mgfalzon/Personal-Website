import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import {BsPeopleCircle, BsFillXDiamondFill} from 'react-icons/bs'
import {green} from '../Components/Various'

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
  <Row>
    <Col>
      <Item>{data[0]}</Item>
      <Item>{data[1]}</Item>
      <Item>{data[2]}</Item>
    </Col>
    <Col>
      <Item>{data[3]}</Item>
      <Item>{data[4]}</Item>
      <Item>{data[5]}</Item>
    </Col>
  </Row>
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
        <Col className='pt-5 pb-3 px-4 justify-content-center'>
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
        </Col>
        <Col className='px-5 justify-content-around'>
          <List data={data.list}/>
        </Col>
        <Col className='py-5 mx-auto text-center'>
            <Image fluid className='shadow' src={require('../Assets/headshot.jpg')} rounded />
        </Col>
      </Container>
    )
}

export default About