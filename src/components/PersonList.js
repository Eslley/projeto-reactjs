import React from 'react'
import Person from './Person'

function PersonList() {

    const persons = [
        {
            id: 1,
            name: 'Rubem',
            years: 21,
            skill: 'ReactJS'
        },
        {
            id: 2,
            name: 'Nanfred',
            years: 24,
            skill: 'Django'
        },
        {
            id: 3,
            name: 'Chomsky',
            years: 20,
            skill: 'Vue.js'
        },
    ]

    const personList = persons.map((person, index) => <Person key={index} index={index} person={person}/>)

    return (
        <div>{personList}</div>
    )
}

export default PersonList