import axios from 'axios';

export const ajaxWrapper = (params) => {
  let defautlHeaders = {
    Accept: 'application/vnd.github.v4+json',
    'Content-Type': 'application/json'
  };

  const headers = {
    ...defautlHeaders,
    ...params.headers,
  };

  return axios({
    headers,
    method: params.method,
    url: params.url,
    data: params.data,
  });
}
