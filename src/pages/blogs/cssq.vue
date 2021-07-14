<template>
	<div id="content">
		<div id="blog-cssq">
			<el-breadcrumb separator-class="el-icon-arrow-right" id="blog-top-title">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item to="../blog">十一仓</el-breadcrumb-item>
				<el-breadcrumb-item>css问题集</el-breadcrumb-item>
			</el-breadcrumb>

			<el-divider id="blog-right-line"></el-divider>
			<search class="search"></search>

		</div>

		<bg></bg>
		<blogRight></blogRight>

		<blogItem></blogItem>
	</div>

</template>

<script>
	import search from "../../components/search.vue"
	import bg from "../../components/bg.vue"
	import blogRight from "../../components/blog-right.vue"
	import blogItem from "../../components/blog-item.vue"
	export default {
		components: {
			bg,
			blogRight,
			search,
			blogItem
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped">

	#blog-cssq {
		position: sticky;
	}
	
	#blog-top-title {
		position: fixed;
		top: 45px;
		left: 5%;
	}
	
	#blog-right-line {
		width: 90%;
		position: fixed;
		top: 45px;
		left: 5%;
	}
	
	.search >>> .el-input__inner {
		border-radius: 30px;
	}
</style>