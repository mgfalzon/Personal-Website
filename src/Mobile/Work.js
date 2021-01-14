import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { TagList } from '../Components/Various'

import { Header, ListItem } from '../Desktop/Work'

const Work = ({data}) => (
    <Container fluid className='work'>
        <div className='py-5 px-3'>
            <h3 className='pb-3' id='work'>
                <BsFillBriefcaseFill className='color mb-1 mr-3' />
                Where I've Worked 
            </h3>
            <Tab.Container defaultActiveKey="0">
                <Row>
                    <Col md='auto mr-5'>
                        <Nav className='d-flex text-nowrap flex-nowrap overflow-auto my-2' >
                            {data.map(x => x.workplace).map((x, i) => 
                                <Nav.Link eventKey={i}>{x}</Nav.Link>
                            )}
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content style={{transition: 'all .1s ease-in-out 0s'}}>
                            {data.map((x, i) => 
                            <Tab.Pane eventKey={i}>
                                <div className='px-3 mt-5'>
                                    <Header text={x.title} date={x.date} />
                                    {x.desc.map(x => <ListItem>{x}</ListItem>)}
                                </div>
                                <div className='overflow-auto'>
                                    <TagList tags={x.tags} justify='end'/>
                                </div>
                            </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    </Container>
)

export default Work