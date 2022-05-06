<template>
	<header>
		<div class="header_wrap">
			<h1 class="logo">
				<router-link to="/"></router-link>
			</h1>
			<div class="right">
				<div class="bx_search">
					<input type="text" class="inp_sch" placeholder="Search..." />
					<span class="ico_sch"></span>
				</div>
				<div class="link">
					<router-link to="/FAQView">FAQ</router-link> | <a href="#">1:1문의</a>
					<a class="link_gomlab" href="//www.gomlab.com/" target="_blank">곰랩 바로가기</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
