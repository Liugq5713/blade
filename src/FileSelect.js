import React from 'react'
import { Button, Icon, message, List } from 'antd'
import fs from 'fs'
import path from 'path'
import resizeImg from 'resize-img'

const { dialog } = window.require('electron').remote

export default class FileSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [],
      uploading: false
    }
    this.handleResize = this.handleResize.bind(this)
    this.OpenDialogToSelectFile = this.OpenDialogToSelectFile.bind(this)
  }

  OpenDialogToSelectFile() {
    dialog.showOpenDialog(
      {
        filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
        properties: ['openFile', 'multiSelections']
      },
      filePaths => {
        this.setState({ fileList: filePaths })
        filePaths.map(filepath => {
          console.log('  path.dirname(filepath)', path.dirname(filepath))
        })
      }
    )
  }

  handleResize() {
    const { fileList } = this.state
    if (fileList.length === 0) {
      message.warning('请先选择文件')
      return
    }
    fileList.map(file => {
      resizeImg(fs.readFileSync(file), {
        width: 128,
        height: 128
      }).then(buf => {
        const outPath = `${path.join(
          path.dirname(file),
          'img/' + path.basename(file)
        )}`
        console.log('outPath', outPath)
        fs.writeFileSync(outPath, buf)
        message.success('图片转化成功')
      })
    })
  }

  render() {
    const { fileList } = this.state
    return (
      <div>
        <Button onClick={this.OpenDialogToSelectFile} type="primary">
          选择文件
        </Button>
        <List
          header={<div>图片列表</div>}
          bordered
          dataSource={fileList}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <Button type="primary" onClick={this.handleResize}>
          开始转化
        </Button>
      </div>
    )
  }
}
