import React from 'react';

export default function UserViewPage() {
    const userArray = [
        {
            firstName: "John",
            lastName: "Doe",
            email: "jone@gmail.com",
            role: "Admin"
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            email: "jane@gmail.com",
            role: "User"
        },
        {
            firstName: "John",
            lastName: "Smith",
            email: "samith@gmail.com",
            role: "User"
        },
    ];

    return (
        <div className="user-view-page">
            <table className="user-table">
                <thead>
                    <tr className="table-header">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userArray.map((user, index) => (
                        <tr key={index} className="user-row">
                            <td className="user-first-name">{user.firstName}</td>
                            <td className="user-last-name">{user.lastName}</td>
                            <td className="user-email">{user.email}</td>
                            <td className="user-role">{user.role}</td>
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