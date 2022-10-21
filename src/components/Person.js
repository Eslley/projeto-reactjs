import React from 'react'
import './person.css';

function Person({ person, index }) {

    const nameStyle = {
        fontSize: '30px',
        color: 'blue'
    }

    return (
        <div>
            <p className='id'>{index}</p>
            <p style={nameStyle}>I am {person.name}</p>
            <p>I am {person.years} years old</p>
            <p>I know {person.skill}</p>
        </div>
    )
}

export default Person