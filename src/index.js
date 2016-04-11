import React, { Component } from 'react'
import { render } from 'react-dom'

import { Grid } from 'react-bootstrap'

import AuthBox from './components/AuthBox.js'
import ResultBox from './components/ResultBox.js'

require('../css/main.css')

// mock props
const mockProps = [
  {
    info: {
      title: 'Title 1'
    },

    result: [
      [0, 'foo1', 1, 2, 3, 4],
      [1, 'foo1', 1, 2, 3, 4],
      [2, 'bar1', 1, 2, 3, 4],
      [3, 'baz1', 1, 2, 3, 4],
      [4, 'baz1', 1, 2, 3, 4]
    ]
  },

  {
    info: {
      title: 'Title 2'
    },

    result: [
      [0, 'foo2', 1, 2, 3, 4],
      [1, 'foo2', 1, 2, 3, 4],
      [2, 'bar2', 1, 2, 3, 4],
      [3, 'baz2', 1, 2, 3, 4],
      [4, 'baz2', 1, 2, 3, 4]
    ]
  }
]

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resultList: mockProps
    }
  }

  componentWillMount () {
    chrome.storage.local.get('resultList', data => {
      this.setState(
        {
          resultList: data.resultList
        })
    })
  }

  render () {
    return <Grid>
             <AuthBox/>
             <ResultBox resultList={this.state.resultList} />
           </Grid>
  }
}

render(<App/>, document.querySelector('#app'))
