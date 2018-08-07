import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import routes from './routes'

const { Header, Content, Footer, Sider } = Layout

export default function PageLayout(props) {
  return (
    <Router>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {routes.map((route, idx) => {
              return (
                <Menu.Item key={idx}>
                  <Link to={route.path}>
                    <Icon type={route.type} />
                    <span className="nav-text">{route.name}</span>
                  </Link>
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Blade ©2018 Better Late Than Never
          </Footer>
        </Layout>
      </Layout>
    </Router>
  )
}
