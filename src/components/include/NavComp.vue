<template>
	<nav>
		<div class="nav_inner">
			<router-link to="/">제품 소개</router-link>
			<router-link to="/Home-layout">홈</router-link>
			<router-link to="/Screen-Layout">프로젝트</router-link>
		</div>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/styles/_variable.scss';
@import '@/styles/_mixin.scss';

nav {
	position: fixed;
	left: 0;
	top: $header_h;
	bottom: 0;
	overflow: auto;
	border-right: 1px solid #e5e5e5;
	@include scrollStyle;
}
.nav_inner {
	width: 300px;
	height: 2000px;
	padding: 30px;
	background: $white;
	box-sizing: border-box;
	a {
		display: block;
	}
}
</style>
