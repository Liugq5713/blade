import React, { Component } from 'react'
import { Switch } from 'antd'

export default class Preset extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Switch defaultChecked />
  }
}
