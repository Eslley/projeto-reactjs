import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Rubem'
      }

      console.log('LifeCycleA Contructor')
    }

    changeState() {
        this.setState({
            name: 'Eslley'
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA ComponentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
                <div>LifeCycle</div>
                <button onClick={() => this.changeState()}>Change</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycle