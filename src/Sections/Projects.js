import React from 'react'
import {Container, Row, Col, Card, Image} from 'react-bootstrap'
import {BsFolderFill} from 'react-icons/bs'
import {Underline, TagList} from '../Components/Various' 

const Header = () => (
    <div className='mb-5'>
        <h3 className='text-center' id='projects'>
            <BsFolderFill className='mb-1 mr-3' color='#47cb9d'/>Projects 
        </h3>
        <Underline length={2} width='3' padding='0' color='#47cb9d'/>
    </div>
)

const Project = ({name, tags, desc, img, demo}) => (

    <Container fluid className='position-relative py-5'>
        <Row>
            <Col md={4}>
                <h3>{name}</h3>
                <TagList tags={tags} justify='start'/>
            </Col>
            <Col className='d-flex justify-content-center'>
                <Image fluid className='rounded shadow' src={require('../Assets/' + img)} 
                    style={{maxHeight: 500, minWidth: 500}}
                />
            </Col>
        </Row>
        <Card className='border-0 w-50 shadow p-1 position-absolute rounded' style={{zIndex: 1, top: 150}}>
            <Card.Body className='text-muted' style={{fontSize: 18}}>
                {desc}<br />
                {demo &&
                <div className='pt-2'>
                    <small><a target='_blank' href={demo}>Live Demo</a></small>
                </div>
                }
            </Card.Body>
        </Card>
    </Container>


)

const Projects = ({data}) => {
    const projects = []
    for(let i = 0; i < data.names.length; i++) {
        projects.push(<Project name={data.names[i]} tags={data.tags[i]} desc={data.desc[i]} img={data.imgs[i]} demo={data.demos[i]} />)
    }
    return (
      <Container fluid>
        <div className='p-5'>
            <Header />
            {projects}
        </div>
       </Container>
    )
}

export default Projects