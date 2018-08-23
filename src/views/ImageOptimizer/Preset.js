import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Switch, Card, Input, Form } from 'antd'
// import { Button, message, Table, Divider, Card } from 'antd'
const FormItem = Form.Item
export default class Preset extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.switchOnchange = this.switchOnchange.bind(this)
  }

  switchOnchange(val, key) {
    const { formOnChange } = this.props
    formOnChange(key, val)
  }

  render() {
    const { config } = this.props
    return (
      <Card>
        <Form onSubmit={this.handleSearch}>
          <Row gutter={24}>
            <Col span={12}>
              <FormItem label="调整尺寸" labelCol={{ span: 5 }}>
                <Switch
                  value={config.resize}
                  onChange={val => this.switchOnchange(val, 'resize')}
                />
              </FormItem>
              <FormItem label="保持比例" labelCol={{ span: 5 }}>
                <Switch
                  value={config.maintainAspectRatio}
                  onChange={val =>
                    this.switchOnchange(val, 'maintainAspectRatio')
                  }
                />
              </FormItem>
              <FormItem
                label="宽"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 6 }}
              >
                <Input
                  value={config.width}
                  onChange={val => this.switchOnchange(val, 'width')}
                />
              </FormItem>
              <FormItem
                label="高"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 6 }}
              >
                <Input
                  value={config.height}
                  onChange={val => this.switchOnchange(val, 'height')}
                />
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
    )
  }
}

Preset.propTypes = {
  formOnChange: PropTypes.func.isRequired,
  config: PropTypes.objectOf(PropTypes.any).isRequired
}
