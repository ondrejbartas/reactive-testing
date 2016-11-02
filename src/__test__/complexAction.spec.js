import Promise from 'bluebird';
import sinon from 'sinon';
import test from 'ava';
import * as apiActions from '../apiCall';
import submitForm from '../complexAction';

async function submit(values) {
  const dispatch = sinon.stub();
  const result = await submitForm(values)({ dispatch });
  return { dispatch, result };
}

test('submitForm must dispatch FORM_SUBMIT_STARTED', async () => {
  const { dispatch } = await submit({});
  sinon.assert.calledWith(dispatch, { type: 'FORM_SUBMIT_STARTED' });
});

test('submitForm must return FORM_SUBMIT_FINISHED', async (t) => {
  const { result } = await submit({});
  t.is(result.type, 'FORM_SUBMIT_FINISHED');
});

test('submitForm must dispatch on success FORM_SUBMIT_SUCCESS', async () => {
  const { dispatch } = await submit({ name: 'John' });
  sinon.assert.calledWithMatch(dispatch, { type: 'FORM_SUBMIT_SUCCESS' });
});

test('submitForm must dispatch on error FORM_SUBMIT_ERROR', async () => {
  const { dispatch } = await submit({ name: 'wrong' });
  sinon.assert.calledWithMatch(dispatch, { type: 'FORM_SUBMIT_ERROR' });
});

test('submitForm must dispatch on error FORM_SUBMIT_ERROR with stubbed api', async () => {
  const api = sinon.stub(apiActions, 'apiCall');

  api.withArgs('/api/form', { method: 'post', body: '{"name":"Error Name"}' })
    .returns(Promise.resolve({ status: 'error' }));

  const { dispatch } = await submit({ name: 'Error Name' });

  sinon.assert.calledWithMatch(dispatch, { type: 'FORM_SUBMIT_ERROR' });
  sinon.assert.calledWith(api, '/api/form', { method: 'post', body: '{"name":"Error Name"}' });

  api.restore();
});
