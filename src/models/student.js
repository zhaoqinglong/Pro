// 这里是redux
import { queryStuList } from '../services/student';

export default {
  namespace: 'student',

  state: {
    list: [],
    // currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryStuList);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },

  },
};
