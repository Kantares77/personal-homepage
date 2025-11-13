import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories} from "./personalHomepageAPI";
import { githubApiURL } from "./githubAPI";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./personalHomepageSlice";

function* fetchRepositoriesHandler() {
    try {
        yield delay(2000);
        const repositories = yield call(getRepositories, githubApiURL);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}