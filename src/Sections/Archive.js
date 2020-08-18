import React, {useState} from 'react'
import {Container, Row, Col, Card, Modal} from 'react-bootstrap'
import {FaArchive, FaInfoCircle, FaGithub, FaLaptopCode} from 'react-icons/fa'
import {TagList} from '../Components/Various'

const Header = () => (
  <h3 className='pb-3' id='archive'>
    <FaArchive className='mb-1 mr-3' color='#47cb9d'/>
    Archive
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
    const [modal, toggleModal] = useState(false)
    let shortenedDesc = desc.split(' ').length > 80 ? desc.split(" ").splice(0, 80).join(" ").concat('...') : desc

    return (
        <>
          <Card className='position-relative bg-light border-0 rounded shadow-sm my-5 mx-3 p-2'>
            <Card.Body>
              <div className='d-flex align-items-center'>
                <h5 className='font-weight-bold'>{title}</h5>
                <div className='flex-grow-1 d-flex justify-content-end mr-3'>
                  <FaInfoCircle 
                      size={18}
                      style={{...linkStyle, cursor: 'pointer'}}
                      onMouseOver={() => setLinkStyle({color: '#47cb9d'})}
                      onMouseOut={() => setLinkStyle({color: '#47cb9d'})}
                      onClick={() => toggleModal(true)}
                  />
                </div>
              </div>
              <em>{subtitle}</em>
              <div className='my-4'>
                <div>
                    <Item icon={FaGithub} link={source}>View Source</Item>
                    <Item icon={FaLaptopCode} link={demo}>Live Demo</Item>
                </div>
                <div className='mt-4'>
                    {shortenedDesc}
                </div>
              </div>
              <TagList tags={tags} />
            </Card.Body>
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
        </>
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
    <Container fluid>
      <Row className='p-5'>
        <Col>
          <Header />
          {projects}
        </Col>
      </Row>
    </Container>
  )
}

export default Archive
