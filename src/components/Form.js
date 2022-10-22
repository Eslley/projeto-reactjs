import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            topic: ''
        }
    }

    handlerChange = (event) => {
        this.setState({
            userName: event.target.value,
        })
    }

    handlerTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userName} escolheu ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type='text'
                        value={this.state.userName}
                        onChange={this.handlerChange}>
                    </input>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handlerTopicChange}>
                        <option value='react'>ReactJS</option>
                        <option value='angular'>AngularJS</option>
                        <option value='vue'>Vue.js</option>
                    </select>
                </div>

                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form