import React from 'react'
import {Container, Row, Col, Card, Image} from 'react-bootstrap'
import {BsFolderFill} from 'react-icons/bs'
import {Underline, TagList, NewBadge} from '../Components/Various' 

const Header = () => (
    <div className='mb-5'>
        <h3 className='text-center' id='projects'>
            <BsFolderFill className='mb-1 mr-3' color='#47cb9d'/>Projects 
        </h3>
        <Underline length={2} width='3' padding='0' color='#47cb9d'/>
    </div>
)

const Project = ({name, tags, desc, img}) => (
    <>
        <div className='position-relative w-100'>
            <Card className=' w-50 border-0 shadow position-absolute p-1' style={{top: 140}}>
                <Card.Body><p className='mb-0 text-muted' style={{fontSize: 20}}>{desc}</p></Card.Body>
            </Card>
        </div>
        <div className='d-flex py-4'>
            <div>
                <h3>{name}</h3>
                <TagList tags={tags} />
            </div>
            <Image className='shadow ml-auto' src={require('../Assets/blinkResume.PNG')} style={{maxWidth: 650}}/>
        </div>
    </>
)

const Projects = ({data}) => {
    const projects = []
    for(let i = 0; i < data.names.length; i++) {
        projects.push(<Project name={data.names[i]} tags={data.tags[i]} desc={data.desc[i]} img={data.imgs[i]} />)
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