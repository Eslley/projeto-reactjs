import React from 'react'

function Person({person, index}) {
  return (
    <div>
        <p>{index}</p>
        <p>I am {person.name}</p>
        <p>I am {person.years} years old</p>
        <p>I know {person.skill}</p>
    </div>
  )
}

export default Person