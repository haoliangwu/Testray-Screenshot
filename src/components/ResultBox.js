import React, { Component } from 'react'
import { Row, Col, Tab, Tabs } from 'react-bootstrap'

import InfoPanel from './InfoPanel.js'
import ResultPanel from './ResultPanel.js'

export default class ResultBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: 1
    }
  }

  handleSelect (key) {
    this.setState({key})
  }

  render () {
    return (
    <Row className='show-grid'>
      <Col xs={12}>
      <h2>The Screenshots</h2>
      </Col>
      <Col xs={12}>
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)}>
        <Tab eventKey={1} title='Tab 1'>
          <InfoPanel/>
          <ResultPanel {...this.props} />
        </Tab>
        <Tab eventKey={2} title='Tab 2'>
          Tab 2 content
        </Tab>
        <Tab eventKey={3} title='Tab 3' disabled>
          Tab 3 content
        </Tab>
      </Tabs>
      </Col>
    </Row>
    )
  }
}
