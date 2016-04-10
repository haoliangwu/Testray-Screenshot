import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class InfoPanel extends Component {
  render () {
    return (
    <Row className='show-grid'>
      <Col xs={12}>
      <h1>Info</h1>
      </Col>
      <Col xs={12}> info
      </Col>
    </Row>
    )
  }
}

export default InfoPanel
