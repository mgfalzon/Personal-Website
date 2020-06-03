import React from 'react'
import {Container, Button, Jumbotron} from 'react-bootstrap'
import {Spacer, GreenButton} from '../Components/Various'

const Contact = () => (
   <Container fluid className='bg-light' id='contact'>
        <div className='p-3'>
            <Container fluid className='d-flex rounded justify-content-around align-items-center w-50 p-3'>
                <div className='d-flex flex-column'>
                    <h2 className=' pt-0 text-black'>Get in Touch</h2>
                    <div className='px-5 w-100 mx-auto' style={{borderBottom: '3px solid #47cb9d'}}></div>
                </div>
                <div className='d-flex'>
                    <GreenButton href='mailto:mattgfalzon@gmail.com'>Email</GreenButton>
                    <Spacer className='mx-3'/>
                    <GreenButton href={process.env.PUBLIC_URL + '/resume.pdf'} download='resume.pdf'>Resume</GreenButton>
                </div>
            </Container>
        </div>
    </Container>
)

export default Contact