import { Button, Table } from 'antd';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { updateuser, deleteuser, getuser } from '../apis/User.Service';

export default function UserViewPage() {
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    getuser()
      .then((response) => {
        console.log(response.data.message);
        setUserArray(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (user) => {
    deleteuser(user)
      .then((response) => {
        console.log(response);
        setUserArray(userArray.filter((u) => u.id !== user.id));
        toast.success('User Deleted Successfully');
      })
      .catch((error) => {
        console.log(error);
        toast.error('User Deletion Failed');
      });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'User ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Responsible Division',
      dataIndex: 'responsibleDivision',
      key: 'responsibleDivision',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
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
                    handleDelete(user);
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
