import React, { Component } from 'react'
// import fs from 'fs'
// import path from 'path'

export default class Files extends Component {
  constructor() {
    super()
    this.state = {
      fileStats: 8
    }
    // this.getfileStats = this.getfileStats.bind(this)
  }

  // getfileStats() {
  //   this.props.FileList = []
  //   fs.stat(filepath, (err, stats) => {
  //     console.log('stats', stats)
  //     console.log('err', err)
  //   })
  // }
  render() {
    const { fileStats } = this.state
    console.log('fileStats', fileStats)
    return <h1>dd</h1>
  }
}
