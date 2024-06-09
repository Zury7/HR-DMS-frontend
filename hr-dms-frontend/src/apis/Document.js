// get
// add
// delete
import axios from 'axios';
import { HOST } from './Host';

export async function searchbyid(employeeid) {
    try {
      const response = await axios.post(`${HOST}/document`, employeeid);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Invalid Employee ID !');
    }
  }


export async function getDocuments() {
    try {
      const response = await axios.get(`${HOST}/document`);
      return response.data;
    } catch (err) {
      console.log(err);
      return await Promise.reject('Failed to get Documents list!');
    }
  }

export async function uploaddoc(document) {
    try {
      const response = await axios.post(`${HOST}/document`, document);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Submission Failed !');
    }
  }

  export async function updatedoc(document) {
    try {
      const response = await axios.put(`${HOST}/document`, document);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Update was Failed !');
    }
  }
  export async function deletedoc(document) {
    try {
      const response = await axios.delete(`${HOST}/document`, document);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Deletion Failed !');
    }
  }