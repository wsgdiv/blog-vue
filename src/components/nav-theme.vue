<template>
	<div id="theme-col" :style="{'background-color':color1}">
		

		<router-link tag="button" to="/" class="card-theme-item">首页</router-link>

		<p style="margin-left:40%;width: 20%;font-size: 25px; display: flex; justify-content: center;">{{ msg }}</p>
		<div class="block">
			<span class="demonstration"></span>
			<el-color-picker v-model="color1" show-alpha></el-color-picker>
		</div>
		<iframe id="weather" allowtransparency="true" frameborder="0" width="290" height="96" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=0&v=0&d=2&bd=0&k=000000&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=290&h=96&align=right"></iframe>
	</div>
</template>

<script>
		export default {
		name: 'navTheme',
		data() {
			return {
				
				color1: 'rgba(255, 69, 0, 0.68)',
				msg:'个人信息'

			}
		}
	}
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
		#weather {
		position: absolute;
		right: 0;
		top: 1%;
	}
	
	.block {
		position: absolute;
		top: 30px;
		left: 100px;
	}
		.card-theme-item {
			background-color:#000000 ;
		color: white;
		text-decoration: none;
		font-family: serif;
		position: fixed;
		top: 3%;
		left: 3%;
	}
</style>