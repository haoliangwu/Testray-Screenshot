import React, { Component } from 'react'
import { render } from 'react-dom'

import { Grid } from 'react-bootstrap'

import AuthBox from './components/AuthBox.js'
import ResultBox from './components/ResultBox.js'

require('../css/main.css')

// mock data
const List = [
  ['foo', 1, 2, 3, 4],
  ['foo', 1, 2, 3, 4],
  ['bar', 1, 2, 3, 4],
  ['baz', 1, 2, 3, 4],
  ['baz', 1, 2, 3, 4]
]

const resultList = List.map((e, i) => {
  e.unshift(i)
  return e
})

const props = {resultList}

export default class App extends Component {
  render () {
    return <Grid>
             <AuthBox/>
             <ResultBox {...props}/>
           </Grid>
  }
}

render(<App/>, document.querySelector('#app'))
