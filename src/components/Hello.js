import React from "react"

const Hello = () => {
    return React.createElement(
        'div',
        { id: 'hello', className: 'helloClass' },
        React.createElement('h1', null, 'Hello'))
}

export default Hello