// const configUrls = require('../apiConfig');
import { makeAjaxRequest } from '../utils/api';

export function getUsers(data) {
  const payload = {
    // 'url': urls.baseURL + urls.api.getUsers,
    url: 'https://api.randomuser.me/?nat=US&results=12',
    method: 'GET',
    data: data,
  };

  return new Promise((resolve, reject) => {
    makeAjaxRequest(payload)
      .then(response => {
        resolve(response);
      })
      .error(err => {
        reject({
          data: err,
          status: {
            code: err.status,
          },
        });
      });
  });
}
