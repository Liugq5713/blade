import React, { Component } from 'react'
import FileOperation from './FileOperation'
import Preset from './Preset'
import Files from './Files'

const { dialog } = window.require('electron').remote

export default class ImageOptmizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FileList: [],
      config: {}
    }
    this.getFiles = this.getFiles.bind(this)
  }

  getFiles() {
    dialog.showOpenDialog(
      {
        filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
        properties: ['openFile', 'multiSelections']
      },
      files => {
        this.setState({ FileList: files })
      }
    )
  }

  render() {
    const { FileList, config } = this.state
    return (
      <div>
        <FileOperation FileList={FileList} />
        <Preset config={config} />
        <Files FileList={FileList} />
      </div>
    )
  }
}
