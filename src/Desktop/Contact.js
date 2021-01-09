import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Spacer } from '../Components/Various'

const Contact = () => (
   <Container fluid className='contact bg-light' id='contact'>
        <div className='p-3'>
            <Container fluid className='d-flex justify-content-around align-items-center w-50 p-3'>
                <div className='d-flex flex-column'>
                    <h2>Get in Touch</h2>
                    <div className='underline' />
                </div>
                <div className='d-flex'>
                    <Button href='mailto:mattgfalzon@gmail.com'>Email</Button>
                    <Spacer className='mx-3'/>
                    <Button href={process.env.PUBLIC_URL + '/resume.pdf'} download='Matthew Falzon Resume.pdf'>Resume</Button>
                </div>
            </Container>
        </div>
    </Container>
)

export default Contact