import Promise from 'bluebird';

export default function apiCall(url, options) {
  if (options.body === '{"name":"wrong"}') {
    return Promise.resolve({ status: 'error' });
  }

  return Promise.resolve({ status: 'ok' });
}