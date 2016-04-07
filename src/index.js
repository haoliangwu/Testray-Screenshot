import React, { Component } from 'react'
import { render } from 'react-dom'

import { Grid, Row, Col, Table } from 'react-bootstrap'

const createFragment = React.addons.createFragment

class ResultPanel extends Component {
  constructor () {
    super()
    this.state = {
      resultList: []
    }
  }

  render () {
    const List = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5]
    ]

    // let children = []

    // for (let st of list) {
    //   children.push(createFragment({
    //     st: (<Panel header={`${st.name}-${st.id}`} eventKey={st.id}>
    //            This is
    //            {`${st.name}-${st.id}`}
    //          </Panel>)
    //   }))
    // }

    // return React.Children.map(children, (child) => {
    //   return child
    // })
    const resultTrsHtml = []

    List.forEach(tr => {
      const resultTdsHtml = []

      tr.forEach(td => {
        resultTdsHtml.push(createFragment({
          td: <td>
                {td}
              </td>
        }))
      })

      resultTrsHtml.push(createFragment(
        {
          tr: <tr>
                {resultTdsHtml}
              </tr>
        }
      ))
    })

    return <Grid>
             <Row className='show-grid'>
               <Col xs={12}>
               <h1>Result Table</h1>
               <button onClick={handleAuth}>
                 auth
               </button>
               </Col>
               <Col xs={12}>
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
           </Grid>
  }
}

render(<ResultPanel/>, document.querySelector('#app'))
