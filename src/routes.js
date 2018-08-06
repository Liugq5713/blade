import React from 'react'
import Pic from '@/views/pic'
export default [
  {
    path: '/',
    exact: true,
    type: 'appstore',
    main: () => <h2>欢迎您，FEer</h2>,
    name: '主页'
  },
  {
    path: '/pic',
    type: 'picture',
    main: ()=><Pic/>,
    name: '图片处理'
  },
  {
    path: '/test',
    type: 'upload',
    main: () => <h2>test</h2>,
    name: '测试用'
  }
]
