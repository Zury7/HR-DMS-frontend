import React from 'react';
import { Button, Table } from 'antd';

import { updateuser } from '../apis/User';
import { deleteuser } from '../apis/User';

export default function UserViewPage() {
  const userArray = [
    {
      mobileNumber: '1234567890',
      employeeNumber: 'EMP001',
      email: 'john.doe@example.com',
      username: 'johndoe',
      responsibleDivision: 'All',
      userType: 'Admin',
    },
    {
      mobileNumber: '9876543210',
      employeeNumber: 'EMP002',
      email: 'jane.doe@example.com',
      username: 'janedoe',
      responsibleDivision: 'HR',
      userType: 'Super User',
    },
    {
      mobileNumber: '8765432109',
      employeeNumber: 'EMP003',
      email: 'john.smith@example.com',
      username: 'johnsmith',
      responsibleDivision: 'Production',
      userType: 'User',
    },
    {
      mobileNumber: '7654321098',
      employeeNumber: 'EMP004',
      email: 'jane.smith@example.com',
      username: 'janesmith',
      responsibleDivision: 'Sales',
      userType: 'User',
    },
    {
      mobileNumber: '6543210987',
      employeeNumber: 'EMP005',
      email: 'john.doe2@example.com',
      username: 'johndoe2',
      responsibleDivision: 'Marketing',
      userType: 'Admin',
    },
    {
      mobileNumber: '5432109876',
      employeeNumber: 'EMP006',
      email: 'jane.doe2@example.com',
      username: 'janedoe2',
      responsibleDivision: 'Finance',
      userType: 'Super User',
    },
    {
      mobileNumber: '1234567890',
      employeeNumber: 'EMP001',
      email: 'john.doe@example.com',
      username: 'johndoe',
      responsibleDivision: 'All',
      userType: 'Admin',
    },
    {
      mobileNumber: '9876543210',
      employeeNumber: 'EMP002',
      email: 'jane.doe@example.com',
      username: 'janedoe',
      responsibleDivision: 'HR',
      userType: 'Super User',
    },
    {
      mobileNumber: '8765432109',
      employeeNumber: 'EMP003',
      email: 'john.smith@example.com',
      username: 'johnsmith',
      responsibleDivision: 'Production',
      userType: 'User',
    },
    {
      mobileNumber: '1234567890',
      employeeNumber: 'EMP001',
      email: 'john.doe@example.com',
      username: 'johndoe',
      responsibleDivision: 'All',
      userType: 'Admin',
    },
    {
      mobileNumber: '9876543210',
      employeeNumber: 'EMP002',
      email: 'jane.doe@example.com',
      username: 'janedoe',
      responsibleDivision: 'HR',
      userType: 'Super User',
    },
    {
      mobileNumber: '8765432109',
      employeeNumber: 'EMP003',
      email: 'john.smith@example.com',
      username: 'johnsmith',
      responsibleDivision: 'Production',
      userType: 'User',
    },
  ];

  const columns = [
    {
      title: 'Mobile Number',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
    },
    {
      title: 'Employee Number',
      dataIndex: 'employeeNumber',
      key: 'employeeNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Responsible Division',
      dataIndex: 'responsibleDivision',
      key: 'responsibleDivision',
    },
    {
      title: 'User Type',
      dataIndex: 'userType',
      key: 'userType',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
    },
  ];

  return (
    <div className='user-view-page'>
      <Table
        className='user-view-page--table'
        bordered={true}
        columns={columns}
        dataSource={userArray.map((user) => {
          return {
            ...user,
            actions: (
              <div>
                <Button
                  className='user-view-page--update-button'
                  type='primary'
                  onClick={() => {
                    updateuser(user);
                  }}
                >
                  Update
                </Button>
                <Button
                  className='user-view-page--delete-button'
                  type='primary'
                  danger
                  onClick={() => {
                    deleteuser(user);
                  }}
                >
                  Delete
                </Button>
              </div>
            ),
          };
        })}
      />
    </div>
  );
}
