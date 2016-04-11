import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class InfoPanel extends Component {
  render () {
    const {title, link} = this.props.info

    return (
    <Row className='show-grid'>
      <Col xs={12}>
      <h1>Info</h1>
      </Col>
      <Col xs={12}>
      {title}
      <a href={link.href} target='_blank'>
        {link.text}
      </a>
      </Col>
    </Row>
    )
  }
}

InfoPanel.propTypes = {
  info: React.PropTypes.object
}
