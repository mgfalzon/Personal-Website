import React, {useState} from 'react'
import {Nav, Col, Tab, Container} from 'react-bootstrap'
import {BsFillBriefcaseFill, BsFillXDiamondFill} from 'react-icons/bs'
import '../CSS/style.css'
import {TagList, NewBadge} from '../Components/Various'

const NavLink = (props) => {
    const standard = {borderStyle: 'none none none solid', transition: 'all .2s ease-in-out'}
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
        <Col sm={3} className='mr-5'>
            <Nav className='d-flex flex-column' variant='tablist' defaultActiveKey='1'>{tabs}</Nav>
        </Col>
    )
}

const Header = (props) => (
    <div>
        <div className='d-flex'><h4>{props.text}{props.new && <NewBadge />}</h4></div>
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
    allTags = tags.map(list => <TagList tags={list}/>)
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
        <Col className='shadow' > 
            <Tab.Content style={{transition: 'all .1s ease-in-out 0s'}}>
                {tabContent}
            </Tab.Content>
        </Col>
    )
}

const Work = ({data}) => (
    <Container fluid>
      <div className='p-5'>
        <h3 className='pb-3' id='work'>
          <BsFillBriefcaseFill className='mb-1 mr-3' color='#47cb9d'/>
          Where I've Worked 
        </h3>
        <Tab.Container defaultActiveKey='0' style={{outline: 'none !important'}}>
            <div className='d-flex'>
                <Tabs data={data.workplaces}/>
                <TabContent jobTitles={data['jobTitles']} dates={data['dates']} desc={data['desc']} tags={data['tags']} />
            </div>
        </Tab.Container>
      </div>
    </Container>
)

export default Work