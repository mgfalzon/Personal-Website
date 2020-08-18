import React, {useState} from 'react'
import {Container, Row, Col, Card, Modal} from 'react-bootstrap'
import {FaArchive, FaInfoCircle, FaGithub, FaLaptopCode} from 'react-icons/fa'
import {TagList} from '../Components/Various'

const Header = () => (
  <h3 className='d-flex justify-content-center align-items-center pb-3' id='archive'>
    <FaArchive className='mt-1 mr-3' color='#47cb9d'/>
    <span>Archive</span>
  </h3>
)

const Item = props => {
    return props.link && (
    <div className='d-flex align-items-center my-2'>
      <div className='mx-3' style={{color: '#47cb9d'}}>
          {React.createElement(props.icon)}
      </div>
      {props.children}
    </div>
    )
}

const ArchivedProject = ({title, subtitle, source, demo, desc, tags, imgs}) => {
    const [linkStyle, setLinkStyle] = useState({color: '#47cb9d'})
    const [transform, setTransform] = useState()
    const [modal, toggleModal] = useState(false)
    let shortenedDesc = desc.split(' ').length > 80 ? desc.split(" ").splice(0, 80).join(" ").concat('...') : desc

    return (
        <Col sm={1} md={3} lg={5}>
          <Card 
            className='position-relative bg-light border-0 rounded my-5 mx-3 p-2 shadow-sm'
            style={{cursor: 'pointer', transition: 'all .20s', transform: transform}}
            onClick={() => toggleModal(true)}
            onMouseOver={() => setTransform('translateY(-.4em)')}
            onMouseOut={() => setTransform('translateY(.4em)')}
          >
            <Card.Body>
              <div className='d-flex align-items-center'>
                <h5 className='font-weight-bold'>{title}</h5>
              </div>
              <em>{subtitle}</em>
              <div className='mt-4'>
                <div className='mt-4 text-muted'>
                    {shortenedDesc}
                </div>
              </div>
            </Card.Body>
              <TagList tags={tags} />
          </Card>
          <Modal centered size='lg' show={modal} onHide={() => toggleModal(false)}>
            <div className='p-4'>
              <Modal.Header className='pb-2 border-0' closeButton>
                <div className='d-flex flex-column'>
                    <h5 className='font-weight-bold'>{title}</h5>
                    <em>{subtitle}</em>
                </div>
              </Modal.Header>
              <Modal.Body className='pt-2 pb-3'>
                <div>
                  <Item icon={FaGithub} link={source}>View Source</Item>
                  <Item icon={FaLaptopCode} link={demo}>Live Demo</Item>
                </div>
                <div className='mt-4'>
                  <div className='d-flex flex-column my-1'>
                    <b>Description: </b>
                      <small>{desc}</small>
                  </div>
                </div>
              </Modal.Body>
            </div>
          </Modal>
        </Col>
    )

}

const Archive = ({data}) => {
  const projects = []
  for(let i = 0; i < data.titles.length; i++) {
    projects.push(
      <ArchivedProject 
        title={data.titles[i]}
        subtitle={data.subtitles[i]}
        source={data.sources[i]}
        demo={data.demos[i]}
        desc={data.desc[i]}
        tags={data.tags[i]}
        imgs={data.imgs[i]}
      />
    )
  }
  return (
    <Container className='p-5' fluid >
      <Header />
      <Row className='mx-5'>{projects}</Row>
    </Container>
  )
}

export default Archive
