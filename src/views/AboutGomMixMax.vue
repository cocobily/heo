<template>
	<div>
		<h2>제품소개</h2>
		<!-- <p>{{ data.message.hello }}</p> -->
		<!-- <p>{{ $t('meta.main-title') }}</p> -->
		<button @click="$store.commit('increment')">증가</button>
	</div>
</template>

<script>
export default {
	name: 'AboutGomMixMax',
	data() {
		return {};
	},
	computed: {
		count() {
			return this.$store.state.count;
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	background: #e9e9e9;
}
</style>
