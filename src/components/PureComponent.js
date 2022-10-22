import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'

class PureComp extends PureComponent {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Rubem'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Rubem'
            })
        }, 2000)
    }
    
    render() {
        console.log('Rendering....')
        return (
            <React.Fragment>
                <MemoComp name={this.state.name}/>
                <div>PureComponent {this.state.name}</div>
            </React.Fragment>
        )
    }
}

export default PureComp