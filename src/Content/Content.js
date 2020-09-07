import React from 'react'
import './content.css'

const content = (props) => {
   return (
        <div className="Content">
            <h2 className="name">{props.name}</h2>
            <a className="phone" href={props.phone_link}>{props.formated_phone}</a>
            <div><br></br></div>
            <a className="website" href={props.website}>Website</a>
            <p className="description">{props.description}</p>
        </div>
    )
}


export default content;