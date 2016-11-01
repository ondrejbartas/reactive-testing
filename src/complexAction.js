import apiCall from './apiCall';

export default function submitForm(values) {
  return async ({ dispatch }) => {
    dispatch({ type: 'SUBMITTING_FORM' });

    const data = await apiCall('/api/form', { method: 'post', body: JSON.stringify(values) });
    if (data.status === 'ok') {
      dispatch({ type: 'SUBMITTED_FORM', payload: data });
    } else {
      dispatch({ type: 'ERRORED_FORM', error: data });
    }
  };
}
