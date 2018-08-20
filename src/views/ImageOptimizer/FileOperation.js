import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
// import { Button, message, Table, Divider, Card } from 'antd'
// import fs from 'fs'
// import path from 'path'
// import resizeImg from 'resize-img'

// const { dialog } = window.require('electron').remote

class FileOperation extends React.Component {
  constructor(props) {
    super(props)
    this.openFile = this.openFile.bind(this)
  }

  openFile() {
    const { getPaths } = this.props
    getPaths()
  }

  render() {
    return (
      <div>
        <Button onClick={this.openFile}>选择文件</Button>
      </div>
    )
  }
}

FileOperation.propTypes = {
  getPaths: PropTypes.func.isRequired
}
export default FileOperation
