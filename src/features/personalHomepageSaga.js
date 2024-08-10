import { takeLatest, call, put } from "redux-saga/effects";
import { fetchRepositories, fetchRepositoriesSuccess } from "./personalHomepageSlice";
import { getRepositories } from "./personalHomepageAPI";

function* fetchRepositoriesHandler({ payload: username }) {
	try {
		const repositories = yield call(getRepositories, username);
		yield put(fetchRepositoriesSuccess(repositories));
	} catch (error) {
		
	}
}

export function* personalHomepageSaga() {
	yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
