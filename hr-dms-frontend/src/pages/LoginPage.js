import { Card, Form, Input, Button } from 'antd';
import { login } from '../apis/User.Service';

export default function LoginReg() {
  const onFinish = async (values) => {
    const credentials = {
      email: values.email,
      password: values.password,
    };

    await login(credentials);
  };

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
    <div className='login-form'>
      <Card
        title='Login'
        style={{
          margin: '20px',
          width: '50%',
          borderRadius: '15px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Form {...formItemLayout} name='login' onFinish={onFinish}>
          <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='password'
            label='Password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button type='primary' htmlType='submit'>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
