import React, { Component } from 'react'
import { Row, Col, Button, Switch, Card, Input } from 'antd'
// import { Button, message, Table, Divider, Card } from 'antd'

export default class Preset extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Card>
        <Row>
          <Col span={12} style={{ textAlign: 'right' }}>
            调整尺寸： <Switch defaultChecked />
            仅缩小： <Switch defaultChecked />
            保持比例：
            <Switch defaultChecked />
            宽：
            <Input />
            高：
            <Input />
          </Col>
        </Row>
      </Card>
    )
  }
}
