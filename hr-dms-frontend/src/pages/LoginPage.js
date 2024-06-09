import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

//import the function from '../api/Authentication';
import { login } from '../apis/User';
import * as Yup from 'yup';

// Use this instead https://github.com/jannikbuschke/formik-antd
export default function LoginReg() {
  // return (
  //   <div>
  //     <h1>HR DMS</h1>
  //     <h2>Login Page</h2>
  //   </div>
  // );
  const LoginRegSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const user_login = {
      username: values.username,
      password: values.password,
    };
    // need to add the function 
    login({ user_login }).then(() => {
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
          username: '',
          password: '',
        }}
        validationSchema={LoginRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='Login'>
              <h1>HR DMS</h1>
              <span>
                <Field type='text' name='username' placeholder='username' />
              </span>
              <span>
                <Field type='text' name='password' placeholder='Password' />
              </span>

              <Button
                className='login--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='login--errors'>
                    <ErrorMessage name='username' component='div' />
                    <ErrorMessage name='password' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}