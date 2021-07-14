<template>
	<div class="input-title">
		<el-input placeholder="请输入内容" v-model="input" suffix-icon="el-icon-search">
		</el-input>
	</div>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				input: ''

			}
		}
	}
</script>

<style scoped="scoped">
	.input-title {
		width: 15%;
		height: 15px;
		position: absolute;
		top: 5%;
		right: 22%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>