<template>
	<div class="hello theme-img">
		<h1>{{ msg }}</h1>

		<iframe id="weather" allowtransparency="true" frameborder="0" width="290" height="96" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=0&v=0&d=2&bd=0&k=000000&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=290&h=96&align=right"></iframe>

		<dialog id="dg" open="true">

			<div class="card-theme">
				<router-link to="./pages/blog" class="card-theme-item">十一仓</router-link>
			</div>
			<div class="card-theme">
				<router-link to="./pages/API/FileSystem-api" class="card-theme-item">API</router-link>
			</div>
			<div class="card-theme">
				<router-link to="./pages/blog" class="card-theme-item">博客日志</router-link>
			</div>

		</dialog>
		<div id="contact">
			<router-link to="./pages/contact" class="card-theme-item">Contact</router-link>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'How you doing ?',
				color1: 'rgba(255, 69, 0, 0.68)',

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.theme-img {
		position: fixed;
		left: 0;
		top: 0;
		min-height: 100vh;
		min-width: 100vw;
		background-image: url(../assets/bg-1.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		z-index: -1000;
	}
	
	#weather {
		position: absolute;
		right: 0;
		top: 1%;
	}
	
	#dg {
		width: 40%;
		height: 40%;
		text-align: center;
		position: absolute;
		background-color: rgba(10, 10, 10, 0.1);
		border: 0;
		border-radius: 20px;
		z-index: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	
	.card-theme {
		background-color: rgba(10, 10, 10, 0.4);
		border-radius: 10px;
		padding: 8px;
		width: 85%;
		height: 10%;
	}
	
	.card-theme-item {
		color: white;
		text-decoration: none;
		font-family: serif;
	}
	
	h1 {
		font-size: 50px;
		padding-top: 50px;
	}
	
	#contact {
		font-size: 20px;
		position: fixed;
		right: 10px;
		bottom: 5px;
		text-decoration: none;
	}
</style>