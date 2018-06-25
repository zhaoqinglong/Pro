// 这里是redux
import { queryStuList,queryStus } from '../services/student';

export default {
  namespace: 'student',

  // State 表示 Model 的状态数据
  state: {
    list: [],
    total:0,
    // currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      // const response = yield call(queryStuList);

      const  {total, list} = yield call(queryStuList);
      yield put({
        type: 'save',
        payload: { list,total},
      });
    },
    *fetchList({payload:{page=1, pageSize=5, gender='all',keywords='' } },{call,put}){
        const params={
          page,
          pageSize,
          gender,
          keywords,
        };

        const {total, list}=yield call(queryStus,params);

        yield put({
          type:"saveList",
          payload:{
            // pagination: {
            //   total,
            //   current: page,
            //   pageSize,
            // },
            list,
            total,
          },
        });

    },

  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload.list,
      };
    },
    // state表示原来的数据，
    // action触发相关方法，修改state对象，他的payload表示上一步传入的数据
    saveList(state,action){
      console.log('state',state);
      console.log('action',action);
      const res={ 
        ...state,
        ...action.payload,
      };
      console.log('sa',res);
      return{
        ...state,
        list:action.payload.list,
        total:action.payload.total,
        // ...action.payload,
      }
    },

  },
};
