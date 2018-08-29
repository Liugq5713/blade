import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
// import { Button, message, Table, Divider, Card } from 'antd'
import fs from 'fs'
// import gm from 'gm'
const gm = require('gm').subClass({ imageMagick: true })
import PngQuant from 'pngquant'

// const imageMagick = gm.subClass({ imageMagick: true })
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

  handlePng = () => {
    const { Paths } = this.props
    const myPngQuanter = new PngQuant([
      192,
      '--quality',
      '60-80',
      '--nofs',
      '-',
      '-v'
    ])
    Paths.forEach(path => {
      const rs = fs.createReadStream(path).pipe(myPngQuanter)
      fs.writeFile('./png/666.png', rs, function(err) {
        if (err) {
          console.log('err', err)
        }
        console.log('donw')
      })
      console.log('r', rs)
    })
    // const { Paths } = this.props
    // Paths.forEach(path => {
    // const { Paths } = this.props
    // Paths.forEach(path => {
    //   console.log('path', path)
    //   gm(path)
    //     .resize(100, 100)
    //     .write(path, function(err) {
    //       if (err) console.log(err)
    //       console.log('success')
    //     })
    // })
  }

  render() {
    return (
      <div>
        <Button onClick={this.openFile}>选择文件</Button>
        <Button onClick={this.handlePng}>安排</Button>
      </div>
    )
  }
}

FileOperation.propTypes = {
  getPaths: PropTypes.func.isRequired
}
export default FileOperation
