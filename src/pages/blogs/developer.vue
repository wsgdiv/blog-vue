<template>
	<div class="dev">
		<essayTitle></essayTitle>
		<bg></bg>

		<div id="essay">
			<h1 id="title">
				<span>
					mavon-editor	
				</span>			
			</h1>
		<el-divider id="blog-title"></el-divider>
		<div id="blog-meta">
			<span>作者：wsgdiv</span> 
			<span>日期：2021-7-7</span> 
		</div>
		<el-divider id="blog-title-meta"></el-divider>
			
			<div id="body">
				123
			</div>
			<div id="foot">
				>独立构建包括编译和支持 template 选项。 它也依赖于浏览器的接口的 存在，所以你不能使用它来为服务器端渲染。 运行时构建不包括模板编译，不支持 tem plate 选项。运行时构建，可以用 render 选项，但它只在单文件组件中起作用，因为单文件组 件的模板是在构建时预编译到 render 函数中，运行时构建只有独立构建大小的 30%，只有 16Kb min+gzip 大小。
			</div>
			

		</div>
	</div>
</template>

<script>
	import essayTitle from "../../components/essay-title.vue"
	import bg from "../../components/bg.vue"

	export default {
		components: {
			essayTitle,
			bg
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped">
	.dev {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;


	}
	
	#essay {
		width: 61.8%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#title{
		
		height: auto;
		position: relative;
		left: -40%;
		
	}
	#blog-meta{
		height: auto;
		position: relative;
		left: -40%;
		top: -10px;
		display: flex;
		flex-direction: column;
		justify-content:  flex-start;
		align-items: flex-start;
	}
	#blog-title-meta{
				position: absolute;
		top: 190px;
		width: 61%;
		align-items: center;
		
			}
		#blog-title {
		position: absolute;
		top: 135px;
		width: 61%;
		align-items: center;
	}
</style>