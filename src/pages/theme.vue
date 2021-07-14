<template>
	<div id="theme-col" :style="{'background-color':color1}" >
			
		</div>


		<div class="block">
			<span class="demonstration"></span>
			<el-color-picker v-model="color1" show-alpha></el-color-picker>
		</div>
</template>

<script>
</script>

<style scoped>
	#theme-col {
		position: absolute;
		top: 0;
		left: 0;
		width: 98.5%;
		height: 100px;
		margin: 10px;
		margin-top: 0;
		z-index: -100;
		
		
	}
	.block {
	position: absolute;
	top: 30px;
	left: 100px;
}
</style>