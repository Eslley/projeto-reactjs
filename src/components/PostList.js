import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMessage: ''
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    errorMessage: 'Error retrieving data'
                })
            })
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.id} {post.title}</div>) :
                    <h2>0 posts</h2>
                }
                {this.state.errorMessage ? <div>{this.state.errorMessage}</div> : null}
            </div>
        )
    }
}

export default PostList