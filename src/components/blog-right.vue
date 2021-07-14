<template>
	<div id="blog-right">
		<div id="blog-right-border">

			<span id="blog-right-title">当区
					</span>
			<el-divider id="blog-right-line"></el-divider>
			<div id="blog-right-body">
				<ul type="circle">
					<li id="blog-right-item">
						<router-link to="/pages/blogs/cssq" class="card-theme-item">CSS问题集</router-link>
					</li>
					<li id="blog-right-item">
						<router-link to="/pages/blogs/cssq" class="card-theme-item">CSS问题集</router-link>
					</li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'blogRight',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	#blog-right-border {
		position: fixed;
		top: 20%;
		right: 10%;
		border: 1px solid #D3D3D3;
		width: 200px;
		height: auto;
		border-radius: 10px;
	}
	
	#blog-right-title {
		font-size: 20px;
		position: relative;
		left: -60px;
		top: 10px;
	}
	
	#blog-right-line {
		width: 80%;
		position: relative;
		left: 20px;
		top: -8px;
	}
	
	#blog-right-body {
		position: relative;
		top: -10px;
	}
	#blog-right-item {
		margin-bottom: 10px;
		
	}
		.card-theme-item {
			position: relative;
			left: -20%;
		color: black;
		text-decoration: none;
		font-family: serif;
	}
</style>