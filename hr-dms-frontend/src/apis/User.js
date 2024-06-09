import axios from 'axios';
import { HOST } from './Host';

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

// add user 
// edit user
// delete user
// get user
