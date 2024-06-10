import { Card, Form, Input, Button } from 'antd';

export default function UserAdd() {
  const onFinish = (values) => {
    const new_user = {
      mobileNum: values.mobileNum,
      loginEmployeeNum: values.loginEmployeeNum,
      email: values.email,
      username: values.username,
      password: values.password,
      responsibleDivision: values.responsibleDivision,
      userType: values.userType,
    };

    // adduser({ new_user })
    //   .then(() => {
    //     navigate('/customerPortal');
    //   })
    //   .catch(() => {
    //     navigate('/customerPortal');
    //   });
  };

  // add the form layout as filling field under the label
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
    <div className='user--registration-form'>
      <Card
        title='User Registration'
        style={{
          margin: '10px',
          // width: '50%',
          borderRadius: '15px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Form {...formItemLayout} name='user_add' onFinish={onFinish}>
          <Form.Item
            name='mobileNum'
            label='Mobile Number'
            rules={[
              { required: true, message: 'Please input your Mobile Number!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='loginEmployeeNum'
            label='Employee Number'
            rules={[
              { required: true, message: 'Please input your Employee Number!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='email'
            label='Email'
            rules={[
              { type: 'email', message: 'The input is not valid E-mail!' },
              { required: true, message: 'Please input your E-mail!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='username'
            label='Username'
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
            name='responsibleDivision'
            label='Responsible Division'
            rules={[
              {
                required: true,
                message: 'Please input your Responsible Division!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='userType'
            label='User Type'
            rules={[
              { required: true, message: 'Please input your User Type!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
