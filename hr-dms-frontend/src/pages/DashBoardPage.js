import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  SearchOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Search from 'antd/es/transfer/search';

const { Header, Sider, Content, Footer } = Layout;

export default function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG, colorBgDark },
  } = theme.useToken();

  return (
    <Layout>
      <Layout className='dashboad--header'>
        <Header
          style={{
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // add this to space out the items
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 80,
                height: 64,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            />
            <h1 style={{ 
              marginLeft: '10px',
              color: 'rgba(255, 255, 255, 0.7)' }}>
              HR Document Management System
            </h1>
          </div>
          <Button
            type='default' // change this from 'text' to 'default'
            icon={<LogoutOutlined />} // use the LogoutOutlined icon
            onClick={() => {
              /* add your logout logic here */
            }}
            style={{
              fontSize: '16px',
              marginRight: '20px', // add some space to the right of the button
            }}
          >
            Logout
          </Button>
        </Header>
      </Layout>
      {/* <div className='dashboad--sider-content'> */}
      <Layout className='dashboad--sider-content'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {!collapsed && <div className='sider-title'>DashBoard</div>}
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<SearchOutlined />}>
              <Link to='/dashboard/search'>Search</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<UploadOutlined />}>
              <Link to='/dashboard/upload'>Upload</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<UserOutlined />}>
              <Link to='/dashboard/user'>User</Link>
            </Menu.Item>
            <Menu.Item key='4' icon={<UserAddOutlined />}>
              <Link to='/dashboard/user/add'>Add User</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      {/* </div> */}
      {/* <Layout>
        <Footer style={{ textAlign: 'center' }}>
          HR-DMS ©2021 Created by HR-DMS Team
        </Footer>
      </Layout> */}
    </Layout>
  );
}
