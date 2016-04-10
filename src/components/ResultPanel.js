import React, { Component } from 'react'
import { Row, Col, Table, Input } from 'react-bootstrap'

const createFragment = React.addons.createFragment

export default class ResultPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resultList: props.resultList,
      searchValue: ''
    }
  }

  handleSearch (e) {
    const {value} = e.target
    const {resultList} = this.props

    this.setState(
      {
        resultList: resultList.filter(e => {
          return e[1].indexOf(value) > -1
        }),

        searchValue: value
      }
    )
  }

  render () {
    const resultTrsHtml = []
    const {resultList} = this.state

    if (resultList.length > 0) {
      resultList.forEach((tr, i) => {
        const resultTdsHtml = tr.map(td => {
          let cellHtml

          if (td.constructor === Object) {
            cellHtml = <td>
                         <a href={td.link}><span>{td.text}</span></a>
                       </td>
          } else {
            cellHtml = <td>
                         <span>{td}</span>
                       </td>
          }
          return createFragment({
            td: cellHtml
          })
        })

        resultTrsHtml.push(createFragment(
          {
            tr: <tr>
                  {resultTdsHtml}
                </tr>
          }
        ))
      })
    }

    return <Row className='show-grid'>
             <Col xs={12}>
             <h1>Result</h1>
             </Col>
             <Col xs={12}>
             <Input
               type='text'
               placeholder='Search..'
               value={this.state.searchValue}
               onChange={this.handleSearch.bind(this)} />
             <Table
               striped
               bordered
               condensed
               hover>
               <thead>
                 <tr>
                   <th>
                     #
                   </th>
                   <th>
                     Priority
                   </th>
                   <th>
                     Component
                   </th>
                   <th>
                     Case
                   </th>
                   <th>
                     Status in Run A
                   </th>
                   <th>
                     Status in Run B
                   </th>
                 </tr>
               </thead>
               <tbody>
                 {resultTrsHtml}
               </tbody>
             </Table>
             </Col>
           </Row>
  }
}

ResultPanel.propTypes = {
  resultList: React.PropTypes.array
}

ResultPanel.defaultProps = {
  resultList: [
    ['foo', 1, 2, 3, 4],
    ['foo', 1, 2, 3, 4],
    ['bar', 1, 2, 3, 4],
    ['baz', 1, 2, 3, 4],
    ['baz', 1, 2, 3, 4]
  ]
}
