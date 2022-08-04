import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPosts } from '../../api';
import { GET_POSTS_SAGA } from '../actions';
import { getPostsAction } from '../reducers/posts';

function* getPostsSaga(action) {
  try {
    const { status, data } = yield call(fetchPosts);
    console.log({ data });
    if (status === 200) {
      yield put(getPostsAction(data));
    } else {
      console.log('error');
    }
  } catch (err) {
    console.log('errorAllCommentSaga', err.response.data);
  }
}

export function* followGetPostsSaga() {
  yield takeLatest(GET_POSTS_SAGA, getPostsSaga);
}

// cách gọi SAGA bên JSX (file khac)
// dispatch({
//   type: GET_POSTS_SAGA,
//   payload: taskDetailModal.taskId
// });
