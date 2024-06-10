import { Button, Table, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import { searchbyid } from '../apis/Document';
import { getEmployees } from '../apis/Employee';
import * as Yup from 'yup';

export default function SearchHomePage() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  // const SearchSchema = Yup.object().shape({
  //   employeeid: Yup.string().required(),
  // });

  // const navigate = useNavigate();
  // const [employees, setEmployees] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   loadEmployeeList();
  // }, []);

  // function loadEmployeeList() {
  //   getEmployees()
  //     .then((data) => {
  //       setEmployees(data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // const handleSubmit = (values, { setSubmitting }) => {
  //   setSubmitting(true);
  //   const search_by_id = {
  //     employeeid: values.employeeid,
  //   };
  //   searchbyid({ search_by_id })
  //     .then((result) => {
  //       setSearchResults(result);
  //       setSubmitting(false);
  //     })
  //     .catch(() => {
  //       setSubmitting(false);
  //       navigate('/customerPortal');
  //     });
  // };

  const searchResults = [
    {
      full_name: 'John Doe',
      employee_number: 'EMP001',
      nic_number: '1234567890V',
      joined_date: '2021-01-01',
      resigned_date: '2021-12-31',
      institute: 'ABC Institute',
      documents: [
        {
          document_id: 'DOC001',
          document_name: 'Document 1',
        },
        {
          document_id: 'DOC002',
          document_name: 'Document 2',
        },
      ],
    },
    {
      full_name: 'Jane Doe',
      employee_number: 'EMP002',
      nic_number: '2345678901V',
      joined_date: '2021-02-01',
      resigned_date: '2021-12-31',
      institute: 'DEF Institute',
      documents: [
        {
          document_id: 'DOC003',
          document_name: 'Document 3',
        },
        {
          document_id: 'DOC004',
          document_name: 'Document 4',
        },
      ],
    },
  ];

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
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  return (
    <div>
      <div className='search-container'>
        <Input.Search
          placeholder='Employee ID...'
          onSearch={handleSearch}
          style={{ width: 200, marginBottom: '1rem' }}
        />
        <Table
          className='search--table'
          columns={columns}
          bordered={true}
          expandable={{
            expandedRowRender: (record, index) => (
              <Table
                key={index}
                columns={[
                  {
                    title: 'Document ID',
                    dataIndex: 'document_id',
                    key: 'document_id',
                  },
                  {
                    title: 'Document Name',
                    dataIndex: 'document_name',
                    key: 'document_name',
                  },
                  { title: 'Action', dataIndex: 'action', key: 'action' },
                ]}
                dataSource={record.documents.map((document, docIndex) => {
                  return {
                    key: `${index}-${docIndex}`,
                    ...document,
                    action: (
                      <div>
                        <Button
                          className='search-document--edit-button'
                          type='primary'
                        >
                          View
                        </Button>
                        <Button
                          className='search-document--delete-button'
                          type='primary'
                          danger
                        >
                          Delete
                        </Button>
                      </div>
                    ),
                  };
                })}
                pagination={false}
              />
            ),
            rowExpandable: (record) => record.documents.length > 0,
          }}
          dataSource={searchResults.map((result, index) => {
            return {
              key: index,
              ...result,
              action: (
                <div>
                  <Button className='search--edit-button' type='primary'>
                    Edit
                  </Button>
                  <Button
                    className='search--delete-button'
                    type='primary'
                    danger
                  >
                    Delete
                  </Button>
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
}
