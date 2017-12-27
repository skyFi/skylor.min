/* eslint import/no-dynamic-require:0 */
import React from 'react';
import Bundle from './bundle';
import { reload } from '../lib/funcs';

// require ensure hook used for server
if (typeof require.ensure !== 'function') {
  require.ensure = (dependencies, callback, chunkName) => {
    if (!chunkName) {
      console.error('chunk name is undefined! ^o^');
    }
    callback(reload);
  };
}

const routes = [
  {
    path: '/',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/home')), 'home')}>
        { Home => <Home {...props} /> }
      </Bundle>)
  },
  {
    path: '/login',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/login')), 'login')}>
        { Login => <Login {...props} /> }
      </Bundle>
    )
  },
  {
    path: '/charts',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/charts')), 'charts')}>
        { Charts => <Charts {...props} /> }
      </Bundle>
    )
  },
  {
    path: '/cate',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/cate')), 'cate')}>
        { Cate => <Cate {...props} /> }
      </Bundle>
    )
  },
  {
    path: '/user',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/user')), 'user')}>
        { User => <User {...props} /> }
      </Bundle>
    )
  },
  {
    path: '/article/list',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/article/article')), 'article')}>
        { Article => <Article {...props} /> }
      </Bundle>
    )
  },
  {
    path: '/article/create',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/article/create')), 'articleCreate')}>
        { ArticleCreate => <ArticleCreate {...props} /> }
      </Bundle>
    )
  },
  {
    path: '/about',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/about')), 'about')}>
        { Home => <Home {...props} /> }
      </Bundle>)
  },
  {
    path: '/contact/:id?',
    exact: true,
    component: props => (
      <Bundle load={cb => require.ensure([], require => cb(require('../../page/container/contact')), 'contact')}>
        { Home => <Home {...props} /> }
      </Bundle>)
  }
];

export default routes;
