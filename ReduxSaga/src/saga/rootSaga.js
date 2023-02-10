import { all } from 'redux-saga/effects'
import { watchFetchUser } from './index'

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
  ])
}