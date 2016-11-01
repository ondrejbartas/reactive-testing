import apiCall from './apiCall';

export default function submitForm(values) {
  return async ({ dispatch }) => {
    dispatch({ type: 'FORM_SUBMIT_STARTED' });

    const data = await apiCall('/api/form', { method: 'post', body: JSON.stringify(values) });
    if (data.status === 'ok') {
      dispatch({ type: 'FORM_SUBMIT_SUCCESS', payload: data });
    } else {
      dispatch({ type: 'FORM_SUBMIT_ERROR', error: data });
    }

    return {
      type: 'FORM_SUBMIT_FINISHED',
    };
  };
}
