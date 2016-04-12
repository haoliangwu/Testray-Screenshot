import React, { Component } from 'react'
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

export default class InfoPanel extends Component {
  render () {
    const {name, link, build, env} = this.props.info

    return (
    <Row className='show-grid'>
      <Col xs={12}>
      <h1>Info</h1>
      </Col>
      <Col xs={6}>
      <ListGroup componentClass='ul'>
        <ListGroupItem header={<strong>Run Id</strong>} bsStyle=''>
          <a href={link.href} target='_blank'>
            {link.text}
          </a>
        </ListGroupItem>
        <ListGroupItem header={<strong>Project Name</strong>} bsStyle=''>
          <span>{name}</span>
        </ListGroupItem>
        <ListGroupItem header={<strong>Build</strong>} bsStyle=''>
          <span>{build}</span>
        </ListGroupItem>
        <ListGroupItem header={<strong>Environment</strong>} bsStyle=''>
          <span>{env}</span>
        </ListGroupItem>
      </ListGroup>
      </Col>
    </Row>
    )
  }
}

InfoPanel.propTypes = {
  info: React.PropTypes.object
}
