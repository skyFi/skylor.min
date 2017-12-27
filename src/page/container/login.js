import React from 'react';
import { fetchData, reduxConnect, Helmet } from 'react-web-helper';
import { Card, Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;
@reduxConnect()
@fetchData()
class About extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container-about">
        <Helmet>
          <title>登录</title>
          <meta name="keywords" content="create-react-web" />
          <meta name="description" content="create-react-web" />
        </Helmet>
        <Card title="登录" style={{ width: '300px', margin: '50px auto', textAlign: 'center' }}>
          <Form onSubmit={e => this.handleSubmit(e)} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入你的用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入你的密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>

      </div>
    );
  }
}

export default Form.create()(About);
