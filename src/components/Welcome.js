import React, { Component }from "react"

class Welcome extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    render() {
        return this.state.isLoggedIn ? (
            <h1>Welcome { this.props.name }</h1>
        ) : (
            <h1>Welcome Guest</h1>
        )
    }
}

export default Welcome