import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        namespaced: true,
        currencies: require('./currencies'),
        ui: require('./ui'),
    }
});
