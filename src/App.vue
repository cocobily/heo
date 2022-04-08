<template>
	<div id="app">
		<keep-alive>
			<header-comp></header-comp>
		</keep-alive>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
			<router-link to="/modules">module</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	components: {
		'header-comp': () =>
			import(/* webpackChunkName: "group-app" */ '@/components/include/HeaderComp.vue'),
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variable.scss';
@import '@/styles/_mixin.scss';
</style>
