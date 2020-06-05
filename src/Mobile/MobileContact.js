import React from 'react'
import {Container} from 'react-bootstrap'
import {Spacer, GreenButton} from '../Components/Various'

const MobileContact = () => (
   <Container fluid className='bg-light' id='contact'>
        <div className='p-3'>
            <Container fluid className='d-flex flex-column justify-content-around align-items-center p-3'>
                <div className='d-flex flex-column'>
                    <h2>Get in Touch</h2>
                    <div className='px-5 w-100 mx-auto' style={{borderBottom: '3px solid #47cb9d'}}></div>
                </div>
                <Spacer className='py-3'/>
                <div className='d-flex'>
                    <GreenButton href='mailto:mattgfalzon@gmail.com'>Email</GreenButton>
                    <Spacer className='mx-3'/>
                    <GreenButton href={process.env.PUBLIC_URL + '/resume.pdf'} download='resume.pdf'>Resume</GreenButton>
                </div>
            </Container>
        </div>
    </Container>
)

export default MobileContact