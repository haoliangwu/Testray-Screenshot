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
      <Col xs={5}>
      <ListGroup componentClass='ul'>
        <ListGroupItem header={<strong>Run Id</strong>} bsStyle='info'>
          <a href={link.href} target='_blank'>
            {link.text}
          </a>
        </ListGroupItem>
        <ListGroupItem header={<strong>Project Name</strong>} bsStyle='info'>
          <span>{name}</span>
        </ListGroupItem>
        <ListGroupItem header={<strong>Build</strong>} bsStyle='info'>
          <span>{build}</span>
        </ListGroupItem>
        <ListGroupItem header={<strong>Environment</strong>} bsStyle='info'>
          <span>{env}</span>
        </ListGroupItem>
      </ListGroup>
      </Col>
      <Col xs={7}>
      <ListGroup componentClass='ul'>
        <ListGroupItem header={<strong>Overview</strong>} bsStyle='warning'>
          {React.createElement('span', {dangerouslySetInnerHTML: {__html: this.props.overview}})}
        </ListGroupItem>
      </ListGroup>
      </Col>
    </Row>
    )
  }
}

InfoPanel.propTypes = {
  info: React.PropTypes.object,
  overview: React.PropTypes.any
}
