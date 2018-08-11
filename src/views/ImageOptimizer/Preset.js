import React, { Component } from 'react'
import { Switch } from 'antd'

export default class Preset extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onChange = this.onChange.bind(this)
  }

  static onChange() {
    console.log('hi')
  }

  render() {
    return <Switch defaultChecked onChange={this.onChange} />
  }
}
