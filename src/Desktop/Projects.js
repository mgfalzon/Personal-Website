import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { BsFolderFill } from 'react-icons/bs'
import { TagList } from '../Components/Various' 
import ReactMarkdown from 'react-markdown'

const Header = () => (
    <div className='mb-5'>
        <h3 className='text-center' id='projects'>
            <BsFolderFill className='color mb-1 mr-3' />Projects 
        </h3>
        <div className='underline' />
    </div>
)

const Project = ({name, tags, desc, img, demo, source}) => (
    <Container fluid className='p-4 mb-5 bg-light shadow-sm' style={{borderRadius: 50}}>
        <Row sm={1} md={2}>
            <Col className='pt-5 pl-5'>
                <h3>{name}</h3>
                <TagList tags={tags} padding='my-3' justify='start'/>
                <Card className='border-0 rounded p-1 w-100 bg-light'>
                    <Card.Body className='text-muted' style={{fontSize: 18}}>
                        <ReactMarkdown source={desc} />
                        <br />
                        {(demo || source) &&
                        <div>
                            {demo &&
                                <small className='mr-3'><a target='_blank' href={demo}>Live Demo</a></small>
                            }
                            {source &&
                                <small><a target='_blank' href={source}>View Source</a></small>
                            }
                        </div>
                        }
                    </Card.Body>
                </Card>
            </Col>
            <Col className='d-flex justify-content-center'>
                <Image fluid src={require('../Assets/' + img)} />
            </Col>
        </Row>
    </Container>
)

const Projects = ({data}) => (
    <Container fluid className='projects'>
        <div className='p-5'>
            <Header />
            {data.map(project => <Project {...project} />)}
        </div>
    </Container>
)

export default Projects