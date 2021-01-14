import React, { useState } from 'react'
import { Container, Row, Col, Card, Modal, Image } from 'react-bootstrap'
import { FaArchive, FaFolderOpen, FaGithub, FaGlobe } from 'react-icons/fa'
import { TagList } from '../Components/Various'
import ReactMarkdown from 'react-markdown'

const Header = () => (
  <h3 className='d-flex justify-content-start align-items-center pb-3' id='archive'>
    <FaArchive className='color mt-1 mr-3' />
    <span>Archived Projects</span>
  </h3>
)

const ArchivedProject = ({title, source, demo, desc, fullDesc, tags, img}) => {
    const [modal, toggleModal] = useState(false)
    return (
        <Col className='mb-4'>
          <Card className='project shadow-sm rounded my-3 p-2 h-100'
            onClick={() => toggleModal(true)}
          >
            <Card.Body className='pb-0'>
              <div className='d-flex align-items-center mb-3'>
                <FaFolderOpen size={30} className='mr-2'/>
                <div className='d-flex flex-grow-1 justify-content-end'>
                  {source && <a className='link' href={source} target='_blank'>
                    <FaGithub size={20} />
                  </a>}
                  {demo && <a className='link' href={demo} target='_blank'>
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
                <Row>
                  <Col md={5}>
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
                    <Image fluid className='rounded'
                      src={require('../Assets/' + img)}
                      alt= "img"
                    />
                  </Col>
                </Row>
              </Modal.Body>
            </div>
          </Modal>
        </Col>
    )
}

const Archive = ({data}) => (
  <Container className='archive px-5 pb-5' fluid>
    <div className='px-5 pb-5'>
      <Header />
      <Row sm={1} md={2} lg={3}>
        {data.map(project => <ArchivedProject {...project} />)}
      </Row>
    </div>
  </Container>
)

export default Archive
export { Header }