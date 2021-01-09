import React from 'react'

const Spacer = (props) => (
   <div className= {props.className}></div>
)

const NewBadge = () => (
    <p className='bg-color ml-3 my-auto badge text-white' style={{fontSize: 10}}>NEW</p> 
)

const TagList = ({tags, justify, padding}) => {
    const justifyContent = justify=='start' ? ' justify-content-start ' : ' justify-content-end '
    const pad = padding ? padding : 'mr-3 my-4 '
    let tagComponents = tags.map(value => (
        <div className='mx-1 badge text-white'style={{backgroundColor: '#47cb9d'}}>{value}</div>
    ))
    return (
        <div className={'d-flex ' + pad + justifyContent} style={{maxWidth: '100%'}}>
            {tagComponents}
        </div>
    )
}

export {Spacer, TagList, NewBadge}