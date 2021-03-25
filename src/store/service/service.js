import Axios from 'axios';
export const getUsers = (pageNo = 1) => {
  return new Promise((resolve, reject) => {
    Axios.get(`https://reqres.in/api/users?page=${pageNo}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
    // .then((res) => resolve(res.data))
    // .catch((err) => reject(err));
  });
};
