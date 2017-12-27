import React from 'react';
import { fetchData, reduxConnect, Helmet } from 'react-web-helper';
import config from '../../../core/common/config';

@reduxConnect()
@fetchData()
class Article extends React.Component {
  render() {
    return (
      <div className="container-about">
        <Helmet>
          <title>Article</title>
          <meta name="keywords" content="create-react-web" />
          <meta name="description" content="create-react-web" />
        </Helmet>
        <h1>Article</h1>
        <img src={`${config.cdn}/images/logo.png`} alt="avatar" />
      </div>
    );
  }
}

export default Article;
