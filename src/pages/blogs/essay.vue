<template>
	<div id="">
		<span>
			独立构建：含义是，拥有完整的模版编译功能和运行时调用功能

运行时构建：含义是，只拥有完整的运行时调用功能

Vue使用/运行过程分为两个阶段，第一阶段是将模版进行编译(如单个vue文件中的template)为渲染函数(render)，第二阶段是将实际函数的调用阶段。

独立构建包括编译和支持 template 选项

运行时构建不包括模板编译，不支持 template 选项


所以有了官方的这段话：

>独立构建包括编译和支持 template 选项。 它也依赖于浏览器的接口的存在，所以你不能使用它来为服务器端渲染。 运行时构建不包括模板编译，不支持 template 选项。运行时构建，可以用 render 选项，但它只在单文件组件中起作用，因为单文件组件的模板是在构建时预编译到 render 函数中，运行时构建只有独立构建大小的 30%，只有 16Kb min+gzip 大小。
		</span>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style>

</style>