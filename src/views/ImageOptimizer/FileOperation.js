import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
// import { Button, message, Table, Divider, Card } from 'antd'

console.log('PropTypes', PropTypes)
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
    const { getFiles } = this.props
    getFiles()
  }

  render() {
    return (
      <div>
        <Button onClick={this.openFile}>test</Button>
        <h1>test</h1>
      </div>
    )
  }
}

FileOperation.propTypes = {
  getFiles: PropTypes.func.isRequired
}
export default FileOperation
