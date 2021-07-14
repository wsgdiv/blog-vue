<template>
	<div id="blog-bg">
		<div id="blog-title">
			<router-link to="/" class="card-blog-item">
				Hey,buddy.欢迎来到十一仓
			</router-link>
			<router-link to="./blogs/writeBlog">
				<el-button type="primary" round class="blog-title-button">寄存</el-button>
			</router-link>
		<search id="search" class="search"></search>
			
			
		</div>

			

		<router-link to="./blogs/essay" class="blog-essay-1">
			第一章
		</router-link>
		<router-link to="./blogs/developer" class="blog-developer-1">
			第二篇：开发者文章
		</router-link>

		
		<blogRight></blogRight>
	</div>

</template>

<script>
	import search from "../components/search.vue"
	import blogRight from "../components/blog-right.vue"
	export default {
		components:{
			blogRight,search
		},

		data() {
			return {
				items: [{
						name: '第一章',
						pat: './blogs/essay',
					},
					{
						name: '第二篇：开发者文章',
						pat: './blogs/developer'
					}
				]


			}
		},
		methods: {
			back: function() {
				this.as = "/";
			}
		}
	}
</script>

<style scoped="scoped">
	#blog-bg {
		background-color: #FFFFCC;
		background-size: 100% 100%;
		position: fixed;
		left: 0;
		top: 0;
		min-height: 100vh;
		min-width: 100vw;
		z-index: -1000;
	}
	#blog-items {
		display: flex;
	}
	
	#blog-title {
		background-color: white;
		height: 80px;
		width: 100vw;
		border-bottom: 1px solid #F0F0F0;
		position: sticky;
	}
	
	#blog-editor {
		position: fixed;
		left: 0;
		top: 0;
		min-height: 100vh;
		min-width: 100vw;
	}
	
	.blog-title-button {
		position: fixed;
		right: 5%;
		top: 3%;
	}
	
	.editor-com {
		display: none;
	}
	
	.card-blog-item {
		background-color: rgba(0, 0, 0, 0);
		border: 0;
		position: fixed;
		left: 2%;
		top: 2%;
		border: 0;
		font-size: 40px;
		color: red;
		font-family: arial;
		text-decoration: none;
	}
	#search{
		position: fixed;
		top: 5%;
		right: 21%;
	}
	.search /deep/ .el-input__inner {
		border-radius: 30px;
	}
	
.blog-essay-1 {
	position: fixed;
	top: 30%;
	left: 20%;
}
.blog-developer-1 {
	position: fixed;
	top: 35%;
	left: 20%;
}
</style>