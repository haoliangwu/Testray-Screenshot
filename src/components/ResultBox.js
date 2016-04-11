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

  generateTabs (resultList) {
    if (resultList) {
      return resultList.map((e, i) => {
        const {RunA} = e.info
        const removeIcon = <span>{RunA.title}<icon onClick={this.handleRemove.bind(this, i)} className='glyphicon glyphicon-remove'/></span>

        return createFragment(
          {
            tab: <Tab eventKey={i} title={removeIcon}>
                   <InfoPanel info={RunA} index={i} />
                   <ResultPanel resultList={e.result} />
                 </Tab>
          }
        )
      })
    }
  }

  handleRemove (i) {
    const isRemove = confirm(`Do you want to remove this scrennshot index? It is irreversible.`)
    if (isRemove) {
      let { resultList } = this.props

      resultList.splice(i, 1)

      chrome.storage.local.set({resultList}, () => {
        console.log(`The screenshot of index ${i} has been removed.`)
        this.setState({
          tabs: [this.generateTabs(resultList)],
          key: 0
        })
      })
    }
  }

  componentWillReceiveProps (props) {
    const { resultList } = props

    // this.state.tabs.push(this.generateTabs(resultList))
    this.setState({
      tabs: [this.generateTabs(resultList)]
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
