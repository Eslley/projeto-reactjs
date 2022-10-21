import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }

    handleClick() {
        this.setState({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.handleClick()}>Click me</button>
            </div>
        )
    }
}

export default EventBind