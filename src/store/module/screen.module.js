// store.screen.[*]
export default {
    state: {
        chart: false
    },
    reducers: {
        ['SET_CHART_SCREEN_STATE'](state, payload) {
            return Object.assign({}, state, {
                chart: payload
            });
        }
    },
    actions: {
        ['SET_CHART_SCREEN_ACTIVE']({ commit }) {
            commit('SET_CHART_SCREEN_STATE', true);
        },
        ['SET_CHART_SCREEN_UNACTIVE']({ commit }) {
            commit('SET_CHART_SCREEN_STATE', false);
        }
    }
};
