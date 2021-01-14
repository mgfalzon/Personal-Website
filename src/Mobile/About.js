import React from 'react'
import { Container, Col, Image } from 'react-bootstrap'
import { BsPeopleCircle } from 'react-icons/bs'

import { List, parser } from '../Desktop/About'

const About = ({data}) => (
  <Container fluid>
    <Col className='pt-5 pb-3 px-4 justify-content-center'>
        <h3 className='pb-3' id='about'>
          <BsPeopleCircle className='color mb-1 mr-3' />
          About Me
        </h3>
        <p>Hello! I'm {data.nickname}, a {data.job} based in {data.location}.</p>
        <p>{data.personalDesc}</p>
        <p>{parser(data.jobDesc)}</p>
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

export default About