import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
	{
		path: '/modules',
		name: 'Module',
		component: () => import(/* webpackChunkName: "group-etc" */ '../views/ModuleView.vue'),
		meta: {
			layout: true,
		},
	},
	{
		path: '/FAQ',
		name: 'FAQ',
		component: () => import(/* webpackChunkName: "about" */ '../views/FAQView.vue'),
	},
	{
		path: '/',
		name: 'AboutGomMixMax',
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutGomMixMax.vue'),
	},
	{
		path: '/Home-Layout',
		name: 'HomeLayout',
		component: () => import(/* webpackChunkName: "about" */ '../views/HomeLayout.vue'),
	},
	{
		path: '/Screen-Layout',
		name: 'ScreenLayout',
		component: () => import(/* webpackChunkName: "about" */ '../views/ScreenLayout.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
