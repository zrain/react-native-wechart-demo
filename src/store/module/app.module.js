import { __DO_NOT_USE__ActionTypes } from 'redux';

import HomeModule from './home.module.js';
import ChartModule from './chart.module.js';

// store.app.[*]
export default {
    state: {
        appName: 'YuandanaAwesomeProject'
    },
    reducers: {
        APP_RESET() {
            // 清空 app 下的所有 state
            return {};
        }
    },
    actions: {
        APP_RESET({ commit, dispatch }) {
            commit('APP_RESET');
            // 从新执行 redux 的初始化逻辑
            dispatch({
                type: __DO_NOT_USE__ActionTypes.INIT
            });
        }
    },
    modules: {
        HomeModule,
        ChartModule
    }
};
