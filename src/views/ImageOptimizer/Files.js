import React from 'react'
import fs from 'fs'
import PropTypes from 'prop-types'

// import path from 'path'

export default function Files({ files }) {
  console.log('files', files)
  files.forEach(file => {
    fs.stat(file, (err, stats) => {
      console.log('stats', stats)
      console.log('err', err)
    })
  })
  return <h1>dd</h1>
}

Files.defaultProps = {
  files: ['ss']
}
Files.propTypes = {
  files: PropTypes.arrayOf(PropTypes.string)
}
