import React, { Component } from 'react'
import FileOperation from './FileOperation'
import Preset from './Preset'
import Files from './Files'
import defaultConfig from './defaultConfig'

const { dialog } = window.require('electron').remote

export default class ImageOptmizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Paths: [],
      config: { ...defaultConfig }
    }
    this.getPaths = this.getPaths.bind(this)
    this.formOnChange = this.formOnChange.bind(this)
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

  formOnChange(key, value) {
    this.setState(prevState => {
      const obj = {}
      obj[key] = value
      return { config: { ...prevState.config, ...obj } }
    })
  }

  render() {
    const { Paths, config } = this.state
    return (
      <div>
        <FileOperation Paths={Paths} getPaths={this.getPaths} />
        <Preset config={config} formOnChange={this.formOnChange} />
        <Files Paths={Paths} />
      </div>
    )
  }
}
