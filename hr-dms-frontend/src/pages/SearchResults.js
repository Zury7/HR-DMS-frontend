import React from 'react';
import { getDocuments } from '../apis/Document';
import { updatedoc } from '../apis/Document';
import { deletedoc } from '../apis/Document';

export default function DocViewPage() {
    const docArray = [
        {
          doc_issued_date: "2024-06-09",
          comment: "Lorem ipsum dolor sit amet",
          category: "Category A",
          document: "document.pdf",
          severity: "Default"
        },
        {
          doc_issued_date: "2024-06-10",
          comment: "Consectetur adipiscing elit",
          category: "Category B",
          document: "document.docx",
          severity: "HR Confidential"
        },
        {
          doc_issued_date: "2024-06-11",
          comment: "Sed do eiusmod tempor incididunt",
          category: "Category C",
          document: "document.txt",
          severity: "CEO's Confidential"
        },
      ];

    return (
        <div className="doc-view-page">
            <table className="doc-table">
                <thead>
                    <tr className="table-header">
                        <th>Doc Issued Date</th>
                        <th>Comment</th>
                        <th>Category</th>
                        <th>Document</th>
                        <th>Severity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {docArray.map((doc, index) => (
                        <tr key={index} className="user-row">
                            <td className="doc-issued-date">{doc.doc_issued_date}</td>
                            <td className="doc-comment">{doc.comment}</td>
                            <td className="doc-category">{doc.category}</td>
                            <td className="doc-document">{doc.document}</td>
                            <td className="doc-severity">{doc.severity}</td>
                            <td className="doc-actions">
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