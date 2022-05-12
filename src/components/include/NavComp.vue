<template>
	<nav>
		<div class="nav_inner">
			<ul class="dep1">
				<li>
					<router-link to="/" :class="{ on: $route.name === 'AboutGomMixMax' }"
						><span class="ico_gnb1"></span>{{ $t('GNB_NAME.TXT1') }}</router-link
					>
				</li>
				<li>
					<router-link to="/Home-layout" :class="{ on: $route.name === 'HomeLayout' }"
						><span class="ico_gnb2"></span>{{ $t('GNB_NAME.TXT2') }}</router-link
					>
				</li>
				<li>
					<router-link to="/Screen-Layout" :class="{ on: $route.name === 'ScreenLayout' }"
						><span class="ico_gnb3"></span>{{ $t('GNB_NAME.TXT3') }}</router-link
					>
				</li>
				<li class="has_sub">
					<router-link to="/Quick-Learning" :class="{ on: $route.name === 'QuickLearning' }"
						><span class="ico_gnb4"></span>{{ $t('GNB_NAME.TXT4') }}</router-link
					>
					<ul class="dep2">
						<li>
							<router-link to="/">{{ $t('GNB_NAME.TXT4_1') }}</router-link>
						</li>
						<li>
							<router-link to="/">{{ $t('GNB_NAME.TXT4_2') }}</router-link>
						</li>
					</ul>
				</li>
				<li class="has_sub">
					<router-link to="/FAQ" :class="{ on: $route.name === 'FAQ' }"
						><span class="ico_gnb4"></span>{{ $t('GNB_NAME.TXT5') }}</router-link
					>
					<ul class="dep2">
						<li>
							<router-link to="/">{{ $t('GNB_NAME.TXT5_1') }}</router-link>
						</li>
						<li>
							<router-link to="/">{{ $t('GNB_NAME.TXT5_2') }}</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	data: function () {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
