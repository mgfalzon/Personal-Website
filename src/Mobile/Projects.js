import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { BsFolderFill } from 'react-icons/bs'
import { TagList } from '../Components/Various' 
import ReactMarkdown from 'react-markdown'

const Header = () => (
    <div className='mb-2'>
        <h3 className='text-center' id='projects'>
            <BsFolderFill className='color mb-1 mr-3' />Projects 
        </h3>
        <div className='underline' />
    </div>
)

const Project = ({name, tags, desc, img, demo, source}) => (
     <Container fluid className='position-relative py-5'>
            <Row className='d-flex flex-column'>
                <h3 className='mb-0'>{name}</h3>
                <TagList tags={tags} justify='start'/>
            </Row>
            <Row className='pb-3'>
                <Card className='border-0'>
                    <Card.Body className='text-muted' style={{fontSize: 18}}>
                        <ReactMarkdown source={desc} />
                    </Card.Body>
                </Card>
            </Row>
            <Image fluid src={require('../Assets/' + img)} />
    </Container>
)

const Projects = ({data}) => (
    <Container fluid className='projects'>
        <div className='py-5 px-3'>
            <Header />
            {data.map(project => <Project {...project} />)}
        </div>
    </Container>
)

export default Projects