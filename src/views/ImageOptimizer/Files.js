import React from 'react'
import fs from 'fs'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import formatFileSize from './util'

// import path from 'path'

export default function Files({ Paths }) {
  const FileList = Paths.map((path, idx) => {
    const stat = fs.statSync(path)
    console.log('path.size', stat.size)
    const options = {
      hour12: false,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
    const size = formatFileSize(stat.size)
    const mtime = stat.mtime.toLocaleDateString('zh-CN', options)

    return { ...stat, path, key: idx, size, mtime }
  })
  const columns = [
    { title: '文件名', dataIndex: 'path', key: 'path' },
    { title: '大小', dataIndex: 'size', key: 'size' },
    { title: '修改时间', dataIndex: 'mtime', key: 'mtime' }
  ]

  const isShowPagination = FileList.length > 5 && true

  return (
    <Table
      dataSource={FileList}
      columns={columns}
      pagination={isShowPagination}
    />
  )
}

Files.defaultProps = {
  Paths: []
}

Files.propTypes = {
  Paths: PropTypes.arrayOf(PropTypes.string)
}
