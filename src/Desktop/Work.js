import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { BsFillBriefcaseFill, BsFillXDiamondFill } from 'react-icons/bs'
import { TagList } from '../Components/Various'

const Header = (props) => (
    <div>
        <h4>{props.text}</h4>
        <h6 className='text-muted mb-3'>{props.date}</h6>
    </div>
)

const ListItem = (props) => (
    <div className='d-flex my-2'> 
        <div><BsFillXDiamondFill size={12} className='color mr-2'/></div>
        <div>{props.children}</div>
    </div>
)

const Work = ({data}) => (
    <Container fluid className='work'>
        <div className='p-5'>
            <h3 className='pb-3' id='work'>
                <BsFillBriefcaseFill className='color mb-1 mr-3' />
                Where I've Worked 
            </h3>
            <Tab.Container defaultActiveKey="0">
                <Row>
                    <Col md='auto mr-5'>
                        <Nav className="flex-column">
                            {data.map(x => x.workplace).map((x, i) => 
                                <Nav.Link eventKey={i}>{x}</Nav.Link>
                            )}
                        </Nav>
                    </Col>
                    <Col className='shadow rounded'>
                        <Tab.Content style={{transition: 'all .1s ease-in-out 0s'}}>
                            {data.map((x, i) => 
                            <Tab.Pane eventKey={i}>
                                <div className='mx-5 mt-5'>
                                    <Header text={x.title} date={x.date} />
                                    {x.desc.map(x => <ListItem>{x}</ListItem>)}
                                </div>
                                <TagList tags={x.tags} justify='end'/>
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
export { Header, ListItem }