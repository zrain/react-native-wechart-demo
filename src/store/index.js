import { createStore } from '@yuandana/react-redux-x';
import rootModule from './root.module.js';

// 创建store实例
const store = createStore(rootModule);

export default store;
