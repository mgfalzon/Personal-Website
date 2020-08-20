import React, {useState} from 'react'
import {Container, Row, Col, Card, Modal,Image, Carousel} from 'react-bootstrap'
import {FaArchive, FaFolderOpen, FaGithub, FaGlobe} from 'react-icons/fa'
import {TagList} from '../Components/Various'
import ReactMarkdown from 'react-markdown'

const Header = () => (
  <h3 className='d-flex justify-content-start align-items-center pb-3' id='archive'>
    <FaArchive className='mt-1 mr-3' color='#47cb9d'/>
    <span>Archived Projects</span>
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

const ArchivedProject = ({title, source, demo, desc, fullDesc, tags, imgs}) => {
    const [linkStyle, setLinkStyle] = useState({color: '#47cb9d'})
    const [transform, setTransform] = useState('unset')
    const [modal, toggleModal] = useState(false)
    let shortenedDesc = desc.split(' ').length > 80 ? desc.split(" ").splice(0, 80).join(" ").concat('...') : desc

    return (
        <Col className='mb-4'>
          <Card 
            className='bg-light border-0 rounded my-3 p-2 shadow-sm h-100'
            style={{cursor: 'pointer', transition: 'all .20s', transform: transform}}
            onClick={() => toggleModal(true)}
            onMouseOver={() => setTransform('translateY(-.4em)')}
            onMouseOut={() => setTransform('translateY(.4em)')}
          >
            <Card.Body className='pb-0'>
              <div className='d-flex align-items-center mb-3'>
                <FaFolderOpen size={30} className='mr-2'/>
                <div className='d-flex flex-grow-1 justify-content-end'>
                  {source && <a className='link' href={source}>
                    <FaGithub size={20} />
                  </a>}
                  {demo && <a className='link' href={demo}>
                    <FaGlobe size={20} style={{marginLeft: '.65rem'}}/>
                  </a>}
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <h5 className='font-weight-bold'>{title}</h5>
              </div>
              <div className='mt-2 mb-3 text-muted'>
                  <ReactMarkdown source={desc} />
              </div>
            </Card.Body>
              <TagList tags={tags} padding='mr-2 my-2'/>
          </Card>
          <Modal centered size='xl' show={modal} onHide={() => toggleModal(false)}>
            <div className='rounded p-4'>
              <Modal.Body>
                <Row xs={1}>
                  <Col>
                    <div className='mb-4 mx-4'>
                      <h4 className='font-weight-bold mb-4'>{title}</h4>
                      <div className='d-flex flex-column my-1'>
                        <ReactMarkdown source={fullDesc} />
                        {(demo || source) &&
                        <div className='pt-2'>
                            {demo &&
                                <small className='mr-3'><a target='_blank' href={demo}>Live Demo</a></small>
                            }
                            {source &&
                                <small><a target='_blank' href={source}>View Source</a></small>
                            }
                        </div>
                        }
                        <TagList tags={tags} padding='my-2'/>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <Carousel className='rounded' indicators={false} controls={false}>
                      {imgs.map(img =>
                        <Carousel.Item>
                          <Image fluid 
                            className='rounded'
                            src={require('../Assets/' + img)}
                            alt= "img"
                          />
                        </Carousel.Item>
                      )}
                    </Carousel>
                  </Col>
                </Row>
              </Modal.Body>
            </div>
          </Modal>
        </Col>
    )
}

const MobileArchive = ({data}) => {
  const projects = []
  for(let i = 0; i < data.titles.length; i++) {
    projects.push(
      <ArchivedProject 
        title={data.titles[i]}
        source={data.sources[i]}
        demo={data.demos[i]}
        desc={data.desc[i]}
        fullDesc={data.fullDesc[i]}
        tags={data.tags[i]}
        imgs={data.imgs[i]}
      />
    )
  }
  return (
    <Container className='px-5 pb-5' fluid>
      <div className='pb-5'>
        <Header />
        <Row xs={1}>
          {projects}
        </Row>
      </div>
    </Container>
  )
}

export default MobileArchive