<template>
	<button v-bind:class="[defaultClass]" v-bind:type="type" v-bind:disabled="disabled">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'ButtonBace',
	data: function () {
		return {
			defaultClass: 'btn',
		};
	},
	props: {
		type: String,
		disabled: String,
	},
};
</script>

<style lang="scss" scoped></style>
