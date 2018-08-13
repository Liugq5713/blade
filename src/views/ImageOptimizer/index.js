import React, { Component } from 'react'
import FileOperation from './FileOperation'
import Preset from './Preset'
import Files from './Files'

const { dialog } = window.require('electron').remote

export default class ImageOptmizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Paths: [],
      config: {}
    }
    this.getPaths = this.getPaths.bind(this)
  }

  getPaths() {
    dialog.showOpenDialog(
      {
        filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
        properties: ['openFile', 'multiSelections']
      },
      paths => {
        this.setState({ Paths: paths })
      }
    )
  }

  render() {
    const { Paths, config } = this.state
    return (
      <div>
        <FileOperation Paths={Paths} getPaths={this.getPaths} />
        <Preset config={config} />
        <Files Paths={Paths} />
      </div>
    )
  }
}
