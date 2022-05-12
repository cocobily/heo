<template>
	<div class="bx_paging">
		<button-bace type="button" class="btn_paging">
			<span class="prev">prev</span>
		</button-bace>
		<button-bace type="button" class="btn_paging">
			<span class="next">next</span>
		</button-bace>
	</div>
</template>

<script>
import ButtonBace from '@/components/ButtonBace.vue';

export default {
	components: { ButtonBace },
	methods: {},
};
</script>

<style lang="scss" scoped></style>
