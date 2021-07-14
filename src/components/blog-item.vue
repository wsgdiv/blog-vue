<template>

	<div id="item-block">

		<div id="item-year" v-for="year in years">
			{{ year.name }}
			<el-divider id="blog-right-line"></el-divider>
			<div id="span-void"></div>
		</div>

	</div>

</template>

<script>
	export default {
		name: 'blogItem',
		data() {
			return {
				years: [{
						name: '2021'
					},
					{
						name: '2020'
					},
					{
						name: '2020'
					},
					{
						name: '2020'
					},
					{
						name: '2020'
					},
					{
						name: '2019'
					}
				]

			}
		}
	}
</script>

<style scoped="scoped">
	#item-year {
		align-content: center;
	}
	
	#item-block {
		display: block;
		width: 80%;
		position: fixed;
		margin-top: 60px;
		padding-top: 80px;

		height: 80%;
		overflow: auto;
		
		 overflow-y: scroll;
    -ms-overflow-style:none;
    scrollbar-width: none;

	
	}
	
::-webkit-scrollbar {
    display: none;
}
	
	#blog-right-line {
		width: 80%;
		position: relative;
		top: -10px;
	}
	
	#span-void {
		display: block;
		margin-bottom: 80px;
	}
</style>