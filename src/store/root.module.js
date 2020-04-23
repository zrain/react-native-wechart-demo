import AppModule from './module/app.module.js';

// store.[*]
export default {
    state: {
        // 可注入外部插入的 reducers
    },
    reducers: {},
    actions: {},
    modules: {
        app: AppModule
    }
};
