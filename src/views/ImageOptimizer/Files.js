import React, { Component } from 'react'
import fs from 'fs'
import path from 'path'


export default class Files extends Component {
  constructor() {
    super()
    this.state = {
      fileStats: []
    }
    this.getfileStats = this.getfileStats.bind(this)
  }

  getfileStats() {
    this.props.FileList = []
    fs.stat(filepath, (err, stats) => {
      console.log('stats', stats)
      console.log('err', err)
    })
  }
}
