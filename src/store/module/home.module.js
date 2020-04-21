import getRandomName from '@assets/js/random-name.js';

const createChartList = () => {
    const arr = [];
    for (let index = 0; index < 50; index++) {
        const name = getRandomName();
        const id = index + 1;
        const item = { name, id, date: '2020/4/10' };
        arr.push(item);
    }
    return arr;
};

const chartList = createChartList();

// store.[*]
export default {
    state: {
        chartList: chartList
    },
    reducers: {
        ['UPDATE'](state, payload) {
            return Object.assign({}, state, payload);
        }
    },
    actions: {
        ['GET_HOME_TOPIC']({ commit }, payload) {
            return {};
        }
    },
    modules: {}
};
