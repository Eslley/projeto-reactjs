import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("The state was updated to", this.state.count)
        // })

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <h1>Counter - { this.state.count }</h1>
                <button onClick={ () => this.increment() }>Increment</button>
            </div>
        )
    }
}

export default Counter