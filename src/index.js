import React, { Component } from 'react'
import { render } from 'react-dom'

class Counter extends Component {
  constructor () {
    super()
    this.state = {
      count: 1
    }
  }
  handleClick () {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return <div onClick={this.handleClick.bind(this)}>
             {this.state.count}
           </div>
  }
}

render(<Counter/>, document.querySelector('#app'))
