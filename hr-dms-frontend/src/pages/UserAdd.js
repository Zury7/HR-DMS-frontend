import { Card, Form, Input, Button, Select } from 'antd';
import RoleType from '../constants/role.type';
import PositionType from '../constants/position.type';
import { adduser, updateuser } from '../apis/User.Service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function UserAdd() {

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      mobile: values.mobile,
      role: values.role,
      responsibleDivision: values.responsibleDivision,
    };

    adduser(newUser)
      .then((response) => {
        console.log(response);
        if (response.data === 'User already exists.') {
          toast.error('User already exists use different Email.');
        } else {
          toast.success('User Registration was Success !');
          navigate('/dashboard/user');
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('User Registration was Failed !');
      });
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
          borderRadius: '15px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Form {...formItemLayout} name='user_add' onFinish={onFinish}>
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please input your Name!' }]}
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
            name='password'
            label='Password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='mobile'
            label='Mobile Number'
            rules={[
              { required: true, message: 'Please input your Mobile Number!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='role'
            label='Role'
            rules={[{ required: true, message: 'Please select your Role!' }]}
          >
            <Select>
              <Select.Option value={RoleType.ADMIN}>Admin</Select.Option>
              <Select.Option value={RoleType.SUPER_ADMIN}>
                Super Admin
              </Select.Option>
              <Select.Option value={RoleType.USER}>User</Select.Option>
              <Select.Option value={RoleType.GUEST}>GUEST</Select.Option>
            </Select>
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
            <Select>
              <Select.Option value={PositionType.ADMIN}>Admin</Select.Option>
              <Select.Option value={PositionType.HR}>HR</Select.Option>
              <Select.Option value={PositionType.MANAGER}>
                Manager
              </Select.Option>
              <Select.Option value={PositionType.DEVELOPER}>
                Developer
              </Select.Option>
              <Select.Option value={PositionType.DESIGNER}>
                Designer
              </Select.Option>
              <Select.Option value={PositionType.TESTER}>Tester</Select.Option>
              <Select.Option value={PositionType.ACCOUNTANT}>
                Accountant
              </Select.Option>
              <Select.Option value={PositionType.MARKETING}>
                Marketing
              </Select.Option>
              <Select.Option value={PositionType.SALES}>Sales</Select.Option>
              <Select.Option value={PositionType.CUSTOMER_SERVICE}>
                Customer Service
              </Select.Option>
              <Select.Option value={PositionType.PRODUCT}>
                Product
              </Select.Option>
              <Select.Option value={PositionType.OTHERS}>Others</Select.Option>
            </Select>
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
