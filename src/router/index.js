import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/modules',
		name: 'Module',
		component: () =>
			import(/* webpackChunkName: "group-etc" */ '../views/ModuleView.vue'),
		meta: {
			layout: true,
		},
	},
	{
		path: '/',
		name: 'home',
		component: () =>
			import(/* webpackChunkName: "group-etc" */ '../views/HomeView.vue'),
	},
	{
		path: '/FAQView',
		name: 'FAQ',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/FAQView.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
