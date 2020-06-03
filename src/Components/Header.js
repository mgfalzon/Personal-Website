import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import Wave from 'react-wavify'
import {Underline} from '../Components/Various'

const Header = () => (
<>
    <Jumbotron className='my-0 py-5 text-center'>
        <div>
          <h1 className='display-4 font-weight-bold' style={{letterSpacing: 1}}>Matthew Falzon</h1>
          <Underline length={3} width='3' padding='2' color='#47cb9d'/>
          <h4 className=' mt-3 text-muted text-uppercase'style={{letterSpacing: 2}}>Software Developer</h4>
        </div>
    </Jumbotron>
    <Wave style={{backgroundColor: '#e9ecef', maxHeight: 25, overflow: 'hidden'}}
        options={{
          height: 0,
          amplitude: 20,
        }}
    />
</>
)

export default Header