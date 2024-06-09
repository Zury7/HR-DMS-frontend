import React from 'react';

import { updateuser } from '../apis/User';
import { deleteuser } from '../apis/User';

export default function UserViewPage() {
    const userArray = [
        {
            mobileNumber: "1234567890",
            employeeNumber: "EMP001",
            email: "john.doe@example.com",
            username: "johndoe",
            responsibleDivision: "All",
            userType: "Admin"
        },
        {
            mobileNumber: "9876543210",
            employeeNumber: "EMP002",
            email: "jane.doe@example.com",
            username: "janedoe",
            responsibleDivision: "HR",
            userType: "Super User"
        },
        {
            mobileNumber: "8765432109",
            employeeNumber: "EMP003",
            email: "john.smith@example.com",
            username: "johnsmith",
            responsibleDivision: "Production",
            userType: "User"
        },
    ];

    return (
        <div className="user-view-page">
            <table className="user-table">
                <thead>
                    <tr className="table-header">
                        <th>Mobile Number</th>
                        <th>Employee Number</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Responsible Division</th>
                        <th>User Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userArray.map((user, index) => (
                        <tr key={index} className="user-row">
                            <td className="user-mobile-number">{user.mobileNumber}</td>
                            <td className="user-employee-number">{user.employeeNumber}</td>
                            <td className="user-email">{user.email}</td>
                            <td className="user-username">{user.username}</td>
                            <td className="user-responsible-division">{user.responsibleDivision}</td>
                            <td className="user-user-type">{user.userType}</td>
                            <td className="user-actions">
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
