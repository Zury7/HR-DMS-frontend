// form for the get deatils of the employee also can upload the document fo the relavenat employee
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { uploaddoc } from '../apis/Document';
import * as Yup from 'yup';

export default function UploadReg() { 
    const uploadRegSchema = Yup.object().shape({
        employeeNumber: Yup.string().required(),
        NIC: Yup.string().required(),
        institute: Yup.string().required(),
        honorific: Yup.string().required(),
        fullName: Yup.string().required(),
        docIssuedDate: Yup.string().required(),
        joinedDate: Yup.string().required(),
        resignedDate: Yup.string().required(),
        comment: Yup.string().required(),
        category: Yup.string().required(),
        uploadYourFile: Yup.string().required(),
        severity: Yup.string().required(),
      });
    
      const handleSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);
        const doc = {
            employeeNumber: values.employeeNumber,
            NIC: values.NIC,
            institute: values.institute,
            honorific: values.honorific,
            fullName: values.fullName,
            docIssuedDate: values.docIssuedDate,
            joinedDate: values.joinedDate,
            resignedDate: values.resignedDate,
            comment: values.comment,
            category: values.category,
            uploadYourFile: values.uploadYourFile,
            severity: values.severity,
        };
        uploaddoc({ doc }).then(() => setSubmitting(false));
      };
      return (
<div>
  <Formik
    initialValues={{
      employeeNumber: '',
      NIC: '',
      institute: '',
      honorific: '',
      fullName: '',
      docIssuedDate: '',
      joinedDate: '',
      resignedDate: '',
      comment: '',
      category: '',
      uploadYourFile: '',
      severity: '',
    }}
    validationSchema={uploadRegSchema}
    onSubmit={handleSubmit}
  >
    {(props) => {
      const errorInputStyle = {
        borderColor: 'red',
      };
      return (
        <Form className='doc--upload--form'>
          <span>
            <Field
              type='text'
              name='employeeNumber'
              placeholder='Employee Number'
              style={
                props.touched.employeeNumber && props.errors.employeeNumber
                  ? errorInputStyle
                  : null
              }
            />
          </span>
          <span>
            <Field type='text' name='NIC' placeholder='NIC' />
          </span>
          <span>
            <Field type='text' name='Institute' placeholder='Institute' />
          </span>
          <span>
            <Field type='text' name='Honorific' placeholder='Honorific' />
          </span>
          <span>
            <Field type='text' name='FullName' placeholder='Full Name' />
          </span>
          <span>
            <Field type='text' name='DocIssuedDate' placeholder='Doc Issued Date' />
          </span>
          <span>
            <Field type='text' name='JoinedDate' placeholder='Joined Date' />
          </span>
          <span>
            <Field type='text' name='ResignedDate' placeholder='Resigned Date' />
          </span>
          <span>
            <Field type='text' name='Comment' placeholder='Comment' />
          </span>
          <span>
            <Field type='text' name='Category' placeholder='Category' />
          </span>
          <span>
            <Field type='text' name='UploadYourFile' placeholder='Upload Your File' />
          </span>
          <span>
            <Field type='text' name='Severity' placeholder='Severity' />
          </span>
          <Button
            className='doc--upload--form--submit'
            type='primary'
            onClick={props.handleSubmit}
            disabled={props.isSubmitting}
          >
            Submit
          </Button>
          {Object.values(props.touched).includes(true) &&
            Object.values(props.errors).length !== 0 && (
              <div className='doc--upload--form--errors'>
                <ErrorMessage name='EmployeeNumber' component='div' />
                <ErrorMessage name='NIC' component='div' />
                <ErrorMessage name='Institute' component='div' />
                <ErrorMessage name='Honorific' component='div' />
                <ErrorMessage name='FullName' component='div' />
                <ErrorMessage name='DocIssuedDate' component='div' />
                <ErrorMessage name='JoinedDate' component='div' />
                <ErrorMessage name='ResignedDate' component='div' />
                <ErrorMessage name='Comment' component='div' />
                <ErrorMessage name='Category' component='div' />
                <ErrorMessage name='UploadYourFile' component='div' />
                <ErrorMessage name='Severity' component='div' />
              </div>
            )}
        </Form>
      );
    }}
  </Formik>
</div>

      );
}