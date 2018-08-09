import React from 'react'
import {
  Button, message, Table, Divider, Card
} from 'antd'
import fs from 'fs'
import path from 'path'
import resizeImg from 'resize-img'


export default class FileSelect extends React.Component {
  constructor(props) {
    super(props)
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
        filePaths.forEach(filepath => {
          fs.stat(filepath, (err, stats) => {
            console.log('stats', stats)
            console.log('err', err)
          })
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
          `img/${path.basename(file)}`
        )}`
        console.log('outPath', outPath)
        fs.writeFileSync(outPath, buf)
        message.success('图片转化成功')
      })
      return file
    })
  }

  render() {
    const columns = [
      {
        title: '文件名',
        dataIndex: 'name',
        key: 'name',
        render: text => text
      },
      { title: '原始大小', dataIndex: 'size', key: 'size' },
      { title: '压缩后', dataIndex: 'address', key: 'address' },
      {
        title: '操作',
        key: 'action',
        render: () => (
          <span>
            <Button type="primary">
移除
            </Button>
            <Divider type="vertical" />
            <Divider type="vertical" />
          </span>
        )
      }
    ]
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      }
    ]
    return (
      <div>
        <Button onClick={this.OpenDialogToSelectFile} type="primary">
          <i className="fa fa-folder-open-o" aria-hidden="true" />
          &nbsp;选择文件
        </Button>
        <Button type="primary" onClick={this.handleResize}>
          <i className="fa fa-play" aria-hidden="true" />
          &nbsp;开始转化
        </Button>

        <Card title="Card title" style={{ width: 300 }} />
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}
