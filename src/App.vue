<template>
	<div id="app" class="wrap">
		<keep-alive>
			<header-comp></header-comp>
		</keep-alive>
		<keep-alive><nav-comp></nav-comp></keep-alive>
		<div class="scroll_area">
			<main>
				<router-view />
				<button v-once type="button" class="btn btn_top" @click="scrollTop()" v-if="isShow">
					<span class="top">top</span>
				</button>
				<keep-alive>
					<footer-comp></footer-comp>
				</keep-alive>
			</main>
		</div>
	</div>
</template>

<script>
import HeaderComp from './components/include/HeaderComp.vue';
import FooterComp from './components/include/FooterComp.vue';
import NavComp from './components/include/NavComp.vue';

export default {
	data() {
		return {
			isShow: false,
		};
	},
	components: {
		HeaderComp,
		FooterComp,
		NavComp,
	},
	mounted() {
		window.addEventListener('scroll', this.isTopButtonShow);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.isTopButtonShow);
	},
	methods: {
		scrollTop() {
			window.scroll({
				top: 0,
				behavior: 'smooth',
			});
		},
		isTopButtonShow() {
			this.isShow = window.scrollY > 50;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variable.scss';
@import '@/styles/_mixin.scss';
.wrap {
	width: 100%;
	height: 100vh;
}
</style>
