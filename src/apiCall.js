import Promise from 'bluebird';

export function apiCall(url, options) {
  if (options.body === '{"name":"wrong"}') {
    return Promise.resolve({ status: 'error' });
  }

  return Promise.resolve({ status: 'ok' });
}
