import axios from 'axios';
import { HOST } from './config';

 //last change
 export async function login(newLogin) {
    try {
      const response = await axios.post(`${HOST}/user`, newLogin);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('Invalid Username or Password !');
    }
  }