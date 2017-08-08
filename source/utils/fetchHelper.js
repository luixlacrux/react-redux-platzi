import fetch from 'isomorphic-fetch';


const fetchHelper = (url, options = {}, isFormData) => {
  const fetchOptions = {
    method: 'GET',
    ...options
  }
  if (fetchOptions.body && !isFormData) {
    fetchOptions.body = window.JSON.stringify(fetchOptions.body);
  }
  return fetch(url, fetchOptions)
    .then((response) => {
      if (response.status === 500) {
        location.pathname = '/500';
      }

      if (response.status === 404) {
        location.pathname = '/404';
      }

      if (response.status === 401) {
        location.pathname = '/401';
      }

      if (response.status >= 400) {
        const error = {
          message: `Bad response from server at ${response.url} => ${response.status}, ${response.statusText}`,
          url: response.url,
          status: +response.status,
          statusText: response.statusText
        }

        return new Promise((resolve, reject) => {
          response
            .json()
            .then((message) => {
              error.message = message.error;
              // Raven.captureException(error)
              reject(error);
            })
            .catch(() => {
              // Raven.captureException(error)
              reject(error);
            })
        })
      }
      if (response.ok && response.status === 204) {
        return Promise.resolve('Success');
      }

      return response.json();
    })
}

export default fetchHelper;
