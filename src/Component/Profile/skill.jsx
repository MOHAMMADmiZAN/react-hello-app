import React from 'react'





const  Skill = (props) =>(
    <div className='skill'>
        <h3>skill: </h3>
        <ul>
            <li>{props.skillA}</li>
            <li>{props.skillB}</li>
            <li>{props.skillC}</li>
            <li>{props.skillD}</li>
            <li>{props.skillE}</li>
            <li>{props.skillF}</li>
        </ul>
    </div>
)

export default Skill;