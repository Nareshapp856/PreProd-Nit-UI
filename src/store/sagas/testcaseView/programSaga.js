import { call, put } from "redux-saga/effects";
import {
  fetchProgramsError,
  fetchProgramsStart,
  fetchProgramsSuccess,
} from "../../slices/testcaseVite/programsSlice";
import { fetchProgramsByTechnbologyApi } from "../../../services/QuestionDB/api";

export function* t_programsSaga(action) {
  try {
    yield put(fetchProgramsStart({}));

    const res = yield call(fetchProgramsByTechnbologyApi, action.payload);

    yield put(fetchProgramsSuccess({ ...res }));
  } catch (error) {
    yield put(
      fetchProgramsError({
        error: { error: error?.name },
        status: error?.response?.status,
      })
    );
  }
}
