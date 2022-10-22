import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

        console.log('LifeCycleB Contructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB ComponentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

    render() {
        console.log('LifeCycleB Render')
        return (
            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB