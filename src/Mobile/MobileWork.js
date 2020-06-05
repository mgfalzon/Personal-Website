import React, {useState} from 'react'
import {Container, Row, Col, Navbar, Nav, Tab} from 'react-bootstrap'
import {BsFillBriefcaseFill, BsFillXDiamondFill} from 'react-icons/bs'
import '../CSS/style.css'
import {TagList, NewBadge} from '../Components/Various'

const NavLink = (props) => {
    const standard = {whiteSpace: 'nowrap', borderStyle: 'none none solid none', transition: 'all .2s ease-in-out'}
    const unselectedStyle = {color: 'black', backgroundColor: 'white', borderStyle: 'none'}
    const hoverStyle      = {color: '#47cb9d', backgroundColor: 'rgba(233, 236, 239, 0.25)', borderStyle: 'none'}
    const selectedStyle   = {color: '#47cb9d', borderColor: '#47cb9d', backgroundColor: 'rgba(233, 236, 239, 0.25)'}
    const [style, setStyle] = useState(unselectedStyle)

    return (
        <Nav.Link 
            className='py-3'
            eventKey= {props.eventKey}
            onMouseOver={() => setStyle(hoverStyle)}
            onMouseOut={() => setStyle(unselectedStyle)}
            onClick={() => {
                props.setActive()
                setStyle(selectedStyle)
            }}
            style={props.state[props.id] ? {...standard, ...selectedStyle} : {...standard, ...style}}
        >{props.text}</Nav.Link>
    )
}

const Tabs = ({data}) => {
    const defaultState = [true]
    for (let i = 0; i < data.length - 1; i++) defaultState.push(false)
    const [state, setState] = useState(defaultState)
    const tabs = data.map((value, index) => {
        const newState = []
        for (let i = 0; i < data.length; i++) newState.push(false)
        newState[index] = true
        return (
            <NavLink 
                id={index}
                state={state} 
                setActive={() => setState(newState)}
                eventKey={index} text={value}
            />
        )
    }) 
    return (
        <Nav className='mb-4' variant='tablist' defaultActiveKey='1' style={{flexWrap: 'nowrap', overflow: 'auto'}}>{tabs}</Nav>
    )
}

const Header = (props) => (
    <div>
        <h4>{props.text}</h4>
        <h6 className='text-muted mb-3'>{props.date}</h6>
    </div>
)

const ListItem = (props) => (
    <div className='d-flex my-2'> 
        <div><BsFillXDiamondFill size={12} color='#47cb9d' className='mr-2'/></div>
        <div>{props.children}</div>
    </div>
)


const TabContent = ({jobTitles, dates, desc, tags}) => {
    let description = [], tabContent = [], allTags = []
    allTags = tags.map(list => <TagList tags={list} justify='end'/>)
    description = desc.map(list => (list.map(item => (<ListItem>{item}</ListItem>))))
    for (let i = 0; i < jobTitles.length; i++) {
        tabContent[i] = 
            <Tab.Pane eventKey={i}>
                <div className='mx-5 mt-5'>
                    <Header text={jobTitles[i]} date={dates[i]} />
                    {description[i]}
                </div>
                {allTags[i]}
            </Tab.Pane>
    }
    return (
        <Row className='shadow' > 
            <Tab.Content style={{transition: 'all .1s ease-in-out 0s'}}>
                {tabContent}
            </Tab.Content>
        </Row>
    )
}

const Work = ({data}) => (
    <Container fluid>
      <div className='py-5 px-4'>
        <h3 className='pb-3' id='work'>
          <BsFillBriefcaseFill className='mb-1 mr-3' color='#47cb9d'/>
          Where I've Worked 
        </h3>
        <Tab.Container defaultActiveKey='0'>
            <Tabs data={data.workplaces}/>
            <TabContent jobTitles={data['jobTitles']} dates={data['dates']} desc={data['desc']} tags={data['tags']} />
        </Tab.Container>
      </div>
    </Container>
)

export default Work