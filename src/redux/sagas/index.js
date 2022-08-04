import { all } from 'redux-saga/effects';
import * as PostsSaga from './postsSaga'

function* mySaga() {
  // follow all action
  yield all([
    PostsSaga.followGetPostsSaga()
  ]);
}

export default mySaga;
