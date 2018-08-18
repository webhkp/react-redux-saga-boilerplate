// import { delay } from 'redux-saga'
// import { put, takeEvery, all } from 'redux-saga/effects'
import { all } from 'redux-saga/effects'
// import helloSaga from "./hello";

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        // helloSaga(),
    ])
}