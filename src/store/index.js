import Vue from 'vue';
import Vuex from 'vuex';
// import i18n from '../i18n';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		conut: 0,
	},
	mutations: {
		increment(state) {
			state.conut++;
		},
	},
});
