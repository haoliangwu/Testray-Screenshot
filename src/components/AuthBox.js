import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default class AuthBox extends Component {
  render () {
    return <Row className='show-grid'>
             <Col xs={12}>
             <h1>Testray Screenshot</h1>
             </Col>
             <Col xs={12}>
             <Button onClick={handleGoogleDocUpdate}>
               Auth
             </Button>
             </Col>
           </Row>
  }
}
