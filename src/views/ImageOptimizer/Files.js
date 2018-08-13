import React from 'react'
import fs from 'fs'
import PropTypes from 'prop-types'
import { Table } from 'antd'

// import path from 'path'

export default function Files({ Paths }) {
  const FileList = Paths.map((path, idx) => {
    const stat = fs.statSync(path)
    return { ...stat, path, key: idx }
  })
  const columns = [
    { title: '路径', dataIndex: 'path', key: 'path' },
    { title: '大小', dataIndex: 'size', key: 'size' },
    { title: '修改时间', dataIndex: 'mtimeMs', key: 'mtimeMs' }
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
