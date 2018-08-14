/**
 * Make api calls to Node server
 */
import fetch from 'isomorphic-fetch';
import { start, stop } from 'client/components/common/Loader/loaderModule';
import store from 'client/main';

export function makeRequest(url, method = 'GET', requestData = null) {
  const fullUrl = window.location.origin + '/api/' + url;

  // Show loader
  store.dispatch(start());

  return fetch(fullUrl, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestData ? JSON.stringify(requestData) : null,
  }).then(response => {
    // Hide loader
    store.dispatch(stop());
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  });
}
