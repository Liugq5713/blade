import React from 'react'
import PropTypes from 'prop-types'
import { Button, message, Table, Divider, Card } from 'antd'
// import fs from 'fs'
// import path from 'path'
// import resizeImg from 'resize-img'

// const { dialog } = window.require('electron').remote

export default class FileSelect extends React.Component {
  constructor(props) {
    super(props)
    this.openFile = this.openFile.bind(this)
  }

  openFile() {
    const { FileList, getFiles } = this.props
    console.log('FileList', FileList)
    console.log('this.props', this.props)
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

FileSelect.propType = {
  getFiles: PropTypes.func
}
