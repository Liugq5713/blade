import React from 'react'
import fs from 'fs'
import PropTypes from 'prop-types'
import { Table } from 'antd'

// import path from 'path'

export default function Files({ FileList }) {
  const files = FileList.map((path, idx) => {
    const stat = fs.statSync(path)
    console.log('stat', stat)
    console.log('...stat', { ...stat })
    console.log('stat.Stats', stat.Stats)
    return { ...stat, path, key: idx }
  })
  const columns = [
    { title: '路径', dataIndex: 'path', key: 'path' },
    { title: '大小', dataIndex: 'size', key: 'size' },
    { title: '修改时间', dataIndex: 'mtimeMs', key: 'mtimeMs' }
  ]

  return <Table dataSource={files} columns={columns} />
}

Files.defaultProps = {
  FileList: []
}

Files.propTypes = {
  FileList: PropTypes.arrayOf(PropTypes.string)
}
