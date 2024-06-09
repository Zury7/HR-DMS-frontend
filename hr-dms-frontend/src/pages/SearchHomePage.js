import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import { searchbyid } from '../apis/Document';
import { getEmployees } from '../apis/Employee';
import * as Yup from 'yup';

export default function SearchHomePage() {
  const SearchSchema = Yup.object().shape({
    employeeid: Yup.string().required(),
  });

  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadEmployeeList();
  }, []);

  function loadEmployeeList() {
    getEmployees()
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const search_by_id = {
      employeeid: values.employeeid,
    };
    searchbyid({ search_by_id })
      .then((result) => {
        setSearchResults(result);
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        navigate('/customerPortal');
      });
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'full_name',
      key: 'full_name',
    },
    {
      title: 'Employee Number',
      dataIndex: 'employee_number',
      key: 'employee_number',
    },
    {
      title: 'NIC Number',
      dataIndex: 'nic_number',
      key: 'nic_number',
    },
    {
      title: 'Joined Date',
      dataIndex: 'joined_date',
      key: 'joined_date',
    },
    {
      title: 'Resigned Date',
      dataIndex: 'resigned_date',
      key: 'resigned_date',
    },
    {
      title: 'Institute',
      dataIndex: 'institute',
      key: 'institute',
    },
  ];

  return (
    <div>
      <Formik
        initialValues={{
          employeeid: '',
        }}
        validationSchema={SearchSchema}
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
                <Field type='text' name='employeeid' placeholder='Employee ID' />
              </span>
              <Button
                className='search--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='search--errors'>
                    <ErrorMessage name='search' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>

      <div>
        <Table dataSource={searchResults.length > 0 ? searchResults : employees} columns={columns} />
      </div>
    </div>
  );
}
