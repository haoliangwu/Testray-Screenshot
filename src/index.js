import React from 'react'
import { render } from 'react-dom'

import ResultPanel from './components/ResultPanel.js'

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

console.log(resultList)

const props = {resultList}

render(<ResultPanel {...props} />, document.querySelector('#app'))
