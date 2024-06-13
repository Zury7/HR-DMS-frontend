import { Card, Button, Form, Input, DatePicker, Select, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { uploaddoc } from '../apis/Document.Service';

const { Option } = Select;

export default function UploadReg() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    // const response = await uploaddoc(values);
    // if (response.status === 200) {
    //   navigate('/success');
    // } else {
    //   navigate('/error');
    // }
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
    <div className='document--upload-form'>
      <Card
        title='Upload Registration'
        style={{
          margin: '10px',
          // width: '50%',
          borderRadius: '15px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Form {...formItemLayout} name='upload_reg' onFinish={onFinish}>
          <Form.Item
            name='employeeNumber'
            label='Employee Number'
            rules={[
              { required: true, message: 'Please input your Employee Number!' },
              {
                pattern: /^[A-Z]{3}[0-9]{3}$/,
                message: 'Please input a valid Employee Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='NIC'
            label='NIC'
            rules={[{ required: true, message: 'Please input your NIC!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='institute'
            label='Institute'
            rules={[
              { required: true, message: 'Please select your Institute!' },
            ]}
          >
            <Select>
              <Option value='institute1'>Institute 1</Option>
              <Option value='institute2'>Institute 2</Option>
              // Add more options as needed
            </Select>
          </Form.Item>

          <Form.Item
            name='honorific'
            label='Honorific'
            rules={[
              { required: true, message: 'Please input your Honorific!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='fullName'
            label='Full Name'
            rules={[
              { required: true, message: 'Please input your Full Name!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='docIssuedDate'
            label='Document Issued Date'
            rules={[
              {
                required: true,
                message: 'Please select the Document Issued Date!',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name='joinedDate'
            label='Joined Date'
            rules={[
              { required: true, message: 'Please select your Joined Date!' },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item name='resignedDate' label='Resigned Date'>
            <DatePicker />
          </Form.Item>

          <Form.Item
            name='comment'
            label='Comment'
            rules={[{ required: true, message: 'Please input your Comment!' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name='category'
            label='Category'
            rules={[
              { required: true, message: 'Please select your Category!' },
            ]}
          >
            <Select>
              <Option value='category1'>Category 1</Option>
              <Option value='category2'>Category 2</Option>
              // Add more options as needed
            </Select>
          </Form.Item>

          <Form.Item label='Dragger'>
            <Form.Item
              name='dragger'
              valuePropName='fileList'
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name='files' action='/upload.do'>
                <p className='ant-upload-drag-icon'>
                  <InboxOutlined />
                </p>
                <p className='ant-upload-text'>
                  Click or drag file to this area to upload
                </p>
                <p className='ant-upload-hint'>
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

          <Form.Item
            name='severity'
            label='Severity'
            rules={[
              { required: true, message: 'Please select your Severity!' },
            ]}
          >
            <Select>
              <Option value='low'>Low</Option>
              <Option value='medium'>Medium</Option>
              <Option value='high'>High</Option>
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
