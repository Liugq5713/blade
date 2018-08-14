import React, { Component } from 'react'
import { Row, Col, Switch, Card, Input, Form } from 'antd'
// import { Button, message, Table, Divider, Card } from 'antd'
const FormItem = Form.Item
export default class Preset extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Card>
        <Form onSubmit={this.handleSearch}>
          <Row gutter={24}>
            <Col span={12}>
              <FormItem label="调整尺寸" labelCol={{ span: 5 }}>
                <Switch defaultChecked />
              </FormItem>
              <FormItem label="仅缩小" labelCol={{ span: 5 }}>
                <Switch defaultChecked />
              </FormItem>
              <FormItem label="保持比例" labelCol={{ span: 5 }}>
                <Switch defaultChecked />
              </FormItem>
              <FormItem
                label="宽"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 6 }}
              >
                <Input />
              </FormItem>
              <FormItem
                label="高"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 6 }}
              >
                <Input />
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
    )
  }
}
