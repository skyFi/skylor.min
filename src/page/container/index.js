import React from 'react';
import { Switch, NavLink } from 'react-router-dom';
import { reduxConnect, withRouter } from 'react-web-helper';
import { renderRoutes } from 'react-router-config';
import { Layout, Menu, Icon } from 'antd';
import Redirect from 'react-router-dom/Redirect';
import routes from '../../core/router/index';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

@withRouter() // 当有 renderRoutes 的时候，这个必须放在最外层，否则页面路由切换不过来
@reduxConnect()
class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      lastUrl: undefined
    };
  }

  componentDidMount() {
    // subscribe state change
    this.unsubscribe = $store.subscribe(() => {
      // update title, keywords, description
      this.updateData();
    });
  }

  componentDidUpdate() {
    if (this.state.lastUrl !== location.href) {
      this.setState({ // eslint-disable-line
        lastUrl: location.href,
      });
      window.scrollTo(0, 0); // scroll to top when router changed.

      // do something when router changed.
      this.updateData();
    }
  }

  componentWillUnmount() {
    // unsubscribe
    this.unsubscribe instanceof Function && this.unsubscribe();
  }

  updateData() {
    // do something when page update.
  }

  // 点击菜单
  menu({ item, key, keyPath }) {
    // const path = keyPath.reverse().join('');
  }

  render() {
    const { location: { pathname } } = this.props;
    const pathnameSplit = pathname.split('/');
    if (pathname !== '/login') {
      return (
        <Redirect to="/login" />
      );
    }
    if (pathname === '/login') {
      return (
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      );
    }
    return (
      <Layout className="page-index">
        <Header className="header">
          <NavLink
            className="logo"
            exact
            to="/"
            activeClassName="active-link"
          >
          Skylor.Min 博客后台管理系统</NavLink>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultOpenKeys={[`${pathnameSplit[pathnameSplit.length - 2]}`]}
              defaultSelectedKeys={[`${pathnameSplit[pathnameSplit.length - 1]}`]}
              style={{ height: '100%', borderRight: 0 }}
              onClick={e => this.menu(e)}
            >
              <Menu.Item key="/">
                <NavLink
                  to="/"
                  activeClassName="active-link"
                >
                  <Icon type="home" />
                首页
              </NavLink>
              </Menu.Item>
              <SubMenu key="article" title={<span><Icon type="book" />文章管理</span>}>
                <Menu.Item key="list">
                  <NavLink
                    to="/article/list"
                    activeClassName="active-link"
                  >
                    文章列表
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="create">
                  <NavLink
                    to="/article/create"
                    activeClassName="active-link"
                  >
                    发表文章
                  </NavLink>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="user">
                <NavLink
                  to="/user"
                  activeClassName="active-link"
                >
                  <Icon type="user" />
                  用户管理
                </NavLink>
              </Menu.Item>
              <Menu.Item key="cate">
                <NavLink
                  to="/cate"
                  activeClassName="active-link"
                >
                  <Icon type="bars" />
                  栏目管理
                </NavLink>
              </Menu.Item>
              <Menu.Item key="charts">
                <NavLink
                  to="/charts"
                  activeClassName="active-link"
                >
                  <Icon type="line-chart" />
                  数据统计
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Switch>
                {renderRoutes(routes)}
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center', textShadow: '0px 1px 2px rgba(0, 0, 0, .3)' }}>
              Skylor.min blog admin ©2017 Created by skylor.min
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
