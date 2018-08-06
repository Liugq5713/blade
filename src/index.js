import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
import 'font-awesome'
import App from './App'

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('app')
)
