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

  export async function adduser(newuser) {
    try {
      const response = await axios.post(`${HOST}/user`, newuser);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('User Registration was Failed !');
    }
  }

  export async function updateuser(existinguser) {
    try {
      const response = await axios.put(`${HOST}/user`, existinguser);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('User Updation was Failed !');
    }
  }


  export async function deleteuser(user) {
    try {
      const response = await axios.delete(`${HOST}/user`, user);
      console.log(response);
    } catch (err) {
      console.log(err);
      return await Promise.reject('User Deletion was Failed !');
    }
  }
// add user 
// edit user
// delete user
// get user
