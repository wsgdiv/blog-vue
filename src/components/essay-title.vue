<template>

	<div id="title-top">

		<el-breadcrumb separator-class="el-icon-arrow-right" id="blog-top-title">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item to="/blog">十一仓</el-breadcrumb-item>
			<el-breadcrumb-item>开发文章</el-breadcrumb-item>
		</el-breadcrumb>

		<search class="search" style="right: 23%;"></search>
		<el-divider id="blog-right-line"></el-divider>
	</div>

</template>

<script>
	import search from "./search.vue"

	export default {
		name: 'essayTitle',
		components: {
			search
		},

		data() {
			return {}
		}
	}
</script>

<style scoped="scoped">
	#title-top {
		width: 61.8%;
		display: block;
		height: 80px;
		margin-bottom: 10px;
	}
	
	#blog-top-title {
		position: absolute;
		top: 55px;
		left: 20%;
	}
	
	#blog-right-line {
		position: absolute;
		top: 55px;
		width: 61%;
		align-items: center;
	}
	.search >>> .input-title{
		position: absolute;
	}
	
	.search /deep/ .el-input__inner {
		border-radius: 30px;
	}
</style>