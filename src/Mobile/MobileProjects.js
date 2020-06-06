import React from 'react'
import {Container, Row, Col, Card, Image} from 'react-bootstrap'
import {BsFolderFill} from 'react-icons/bs'
import {Underline, TagList} from '../Components/Various' 

const Header = () => (
    <div className='mb-2'>
        <h3 className='text-center' id='projects'>
            <BsFolderFill className='mb-1 mr-3' color='#47cb9d'/>Projects 
        </h3>
        <Underline length={2} width='3' padding='0' color='#47cb9d'/>
    </div>
)

const Project = ({name, tags, desc, img}) => (
    <Container fluid className='position-relative py-5'>
            <Row className='d-flex flex-column'>
                <h3 className='mb-0'>{name}</h3>
                <TagList tags={tags} justify='start'/>
            </Row>
            <Row className='pb-3'>
                <Card className='border-0 '>
                    <Card.Body className='text-muted' style={{fontSize: 18}}>{desc}</Card.Body>
                </Card>
            </Row>
            <Row>
                <Image fluid className='w-100 py-3 shadow' src={require('../Assets/blinkResume.PNG')} style={{height: 'auto'}}/>
            </Row>
    </Container>


)

const MobileProjects = ({data}) => {
    const projects = []
    for(let i = 0; i < data.names.length; i++) {
        projects.push(<Project name={data.names[i]} tags={data.tags[i]} desc={data.desc[i]} img={data.imgs[i]} />)
    }
    return (
      <Container fluid>
        <div className='py-5 px-4'>
            <Header />
            {projects}
        </div>
       </Container>
    )
}

export default MobileProjects