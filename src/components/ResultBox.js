import React, { Component } from 'react'
import { Row, Col, Tab, Tabs } from 'react-bootstrap'

import InfoPanel from './InfoPanel.js'
import ResultPanel from './ResultPanel.js'

const createFragment = React.addons.createFragment

export default class ResultBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: 0,
      tabs: []
    }
  }

  componentWillMount () {
    const { resultList } = this.props
    resultList.forEach((e, i) => {
      this.state.tabs.push(createFragment(
        {
          tab: <Tab eventKey={i} title={e.info.title}>
                 <InfoPanel info={e.info} />
                 <ResultPanel resultList={e.result} />
               </Tab>
        }
      ))
    })
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
        {this.state.tabs}
      </Tabs>
      </Col>
    </Row>
    )
  }
}

ResultBox.propTypes = {
  resultList: React.PropTypes.array
}