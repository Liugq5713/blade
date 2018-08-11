import React from 'react'
import ImageOptimizer from '@/views/ImageOptimizer'

export default [
  {
    path: '/',
    exact: true,
    type: 'appstore',
    main: () => <h2>欢迎您，FEer</h2>,
    name: '主页'
  },
  {
    path: '/imageOptimizer',
    type: 'picture',
    main: () => <ImageOptimizer />,
    name: '图片处理'
  },
  {
    path: '/test',
    type: 'question',
    main: () => <h2>test</h2>,
    name: '测试用'
  }
]
