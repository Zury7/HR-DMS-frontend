import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { adduser } from '../apis/User';
import * as Yup from 'yup';



export default function UserAdd() {
    const userAddSchema = Yup.object().shape({
      mobileNum: Yup.string().required('Mobile Num is required'),
      loginEmployeeNum: Yup.string().required('Login User Employee Number is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
      responsibleDivision: Yup.string().required('Responsible Division is required'),
      userType: Yup.string().required('User Type is required'),
    });

      const navigate = useNavigate();
      const handleSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);
        const new_user = {
          mobileNum: values.mobileNum,
          loginEmployeeNum: values.loginEmployeeNum,
          email: values.email,
          username: values.username,
          password: values.password,
          responsibleDivision: values.responsibleDivision,
          userType: values.userType,
        };
        // need to add the function 
        adduser({ new_user }).then(() => {
          setSubmitting(false)
          navigate('/customerPortal')// Need to seperately logged into matching Home Page
        }).catch(() => {
          setSubmitting(false)
          navigate('/customerPortal')
        }
        );
      };
    return (
      <div>
        <Formik
          initialValues={{
            mobileNum: '',
            loginEmployeeNum: '',
            email: '',
            username: '',
            password: '',
            responsibleDivision: '',
            userType: '',
          }}
          validationSchema={userAddSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const errorInputStyle = {
              borderColor: 'red',
            };
            return (
              <Form className='user-add-form'>
                <span>
                  <Field
                    type='text'
                    name='mobileNum'
                    placeholder='Mobile Number'
                    style={
                      props.touched.mobileNum && props.errors.mobileNum ? errorInputStyle : null
                    }
                  />
                </span>
                <span>
                  <Field type='text' name='loginEmployeeNum' placeholder='Employee Number' />
                </span>
                <span>
                  <Field type='text' name='email' placeholder='Email' />
                </span>
                <span>
                  <Field type='text' name='username' placeholder='Username' />
                </span>
                <span>
                  <Field type='password' name='password' placeholder='Password' />
                </span>
                <span>
                  <Field type='text' name='responsibleDivision' placeholder='Responsible Division' />
                </span>
                <span>
                  <Field type='text' name='userType' placeholder='User Type' />
                </span>
                <button
                  className='user-add-form-submit'
                  type='submit'
                  disabled={props.isSubmitting}
                >
                  Submit
                </button>
                {Object.values(props.touched).includes(true) &&
                  Object.values(props.errors).length !== 0 && (
                    <div className='user-add-form-errors'>
                      <ErrorMessage name='mobileNum' component='div' />
                      <ErrorMessage name='loginEmployeeNum' component='div' />
                      <ErrorMessage name='email' component='div' />
                      <ErrorMessage name='username' component='div' />
                      <ErrorMessage name='password' component='div' />
                      <ErrorMessage name='responsibleDivision' component='div' />
                      <ErrorMessage name='userType' component='div' />
                    </div>
                  )}
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }