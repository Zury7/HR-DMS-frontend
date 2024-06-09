import axios from 'axios';
import { HOST } from './Host';

export async function getEmployees() {
  try {
    const response = await axios.get(`${HOST}/employee`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get employees list!');
  }
}


// get employee details
// get employee id
// 

