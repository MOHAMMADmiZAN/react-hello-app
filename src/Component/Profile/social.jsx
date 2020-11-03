import React from 'react'



const Social = (props) =>(
    <div className='social'>
        <h3>Social Link: </h3>
        <ul>
            <li><a href={props.fbLink}>{props.fb}</a></li>
            <li><a href={props.liLink}>{props.li}</a></li>
            <li><a href={props.gitLink}>{props.gitl}</a></li>
            <li><a href={props.devLink}>{props.dev}</a></li>

        </ul>
    </div>
)
export  default Social