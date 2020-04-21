import AppModule from './app.module.js';
import ScreenModule from './screen.module.js';

// store.[*]
export default {
    state: {
        // 可注入外部插入的 reducers
    },
    reducers: {},
    actions: {},
    modules: {
        app: AppModule,
        screen: ScreenModule
    }
};
